const create = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            confirmed BOOLEAN, 
            email VARCHAR(255) NOT NULL UNIQUE, 
            password VARCHAR(255) NOT NULL
        )
    `

const drop = `DROP TABLE users`

export {create, drop}