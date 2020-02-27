import pbkdf2 from 'pwd'
import isEmpty from 'lodash/isEmpty'

// Common
import { throwError, throwIf } from 'utils/error'
import { find, queryDb } from 'utils/utils'
import { logMeIn } from './common/logMeIn'
import { getOrder } from './common/paypal'
import { deliever } from 'lib/email/utils/deliever'

const createUser = props => {
    return queryDb(
        /* GraphQL */ `
            mutation newUser(
                $email: String!
                $password: String!
                $salt: String!
                $name: String!
            ) {
                insert_users(
                    objects: [
                        {
                            email: $email
                            password: $password
                            salt: $salt
                            profile: { data: { name: $name } }
                        }
                    ]
                ) {
                    returning {
                        id
                        profile {
                            name
                        }
                    }
                }
            }
        `,
        props
    )
        .then(d => {
            console.log('--------d', d)
            return d.insertUsers.returning[0]
        })
        .catch(err => {
            const { message } = err
            if (message.includes('duplicate') && message.includes('email')) {
                throwError(400, 'User already exists')(err)
            } else {
                throw err
            }
        })
}

const getUserByEmail = props =>
    queryDb(
        /* GraphQL */ `
            query getUserByEmail($email: String!) {
                users(where: { email: { _eq: $email } }) {
                    id
                    paid
                    profile {
                        name
                    }
                }
            }
        `,
        props
    ).then(d => d.users[0] || {})

const updateUserPaid = props => {
    return queryDb(
        /* GraphQL */ `
            mutation setUserPaid($userId: Int!) {
                update_users(where: { id: { _eq: $userId } }, _set: { paid: true }) {
                    affected_rows
                }
            }
        `,
        props
    )
}

export async function signUp({ body, host, res }) {
    console.log('signUp body', body)
    let { order, name, email, price, fullCourseName } = body
    let password = find((value, key) => key.match(/password/i))(body)

    throwIf(!email || !password || !name, 400, 'No password or email or name')()

    name = name.trim()
    email = email.trim()
    password = password.trim()

    let user
    let info
    if (order.after) {
        console.log('order after')
        const user = await getUserByEmail({ email }).then(
            throwIf(u => u.paid, 400, 'User already paid')
        )
        // continue <-- User found and user not paid yet

        await updateUserPaid({ userId: user.id }).then(d =>
            console.log('updated n rows', d)
        )

        const { name } = user.profile[0]
        info = await deliever({
            email,
            name,
            subject: 'Register email',
            template: 'register',
            templateParams: { name, fullCourseName, price, receipt: order.after.receipt },
        }).catch(throwError(400, 'Email not sent'))

        await logMeIn(user.id, res)
    } else if (order.before) {
        console.log('order before')

        user = await getUserByEmail({ email }).then(
            throwIf(u => u.paid, 400, 'User already paid')
        )

        // continue <-- User not found or user not paid yet

        if (isEmpty(user)) {
            const { hash, salt } = await pbkdf2.hash(password)
            user = await createUser({ email, password: hash, salt, name })
        }
    }

    return { user, info }
}
