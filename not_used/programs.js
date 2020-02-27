import React from 'react'
import { useStore, useActions } from 'easy-peasy'
import { RouteLink } from 'common/RouteLink'

export default class ProgramsPage extends React.Component {
    constructor(props) {
        super(props)
        // const { store } = props
        if (process.browser) {
            console.log('BROWSER in constructor in programs')
            // store.dispatch.programs.reset()
        } else {
            console.log('SERVER in constructor in programs')
        }
    }

    componentWillUnmount() {
        // const { store } = this.props
        if (process.browser) {
            console.log('BROWSER in componentWillUnmount in programs')
            console.log('cleaning programs store')
            // store.dispatch.programs.clean()
        }
    }

    static async getInitialProps({ store }) {
        if (process.browser) {
            console.log('BROWSER programs in getInitialProps')
        } else {
            console.log('SERVER programs in getInitialProps')
        }

        return { store }
    }

    render() {
        console.log('RENDER programs')
        console.log('props', this.props)
        const programs = useStore(state => state.programs)

        return (
            <div>
                <h2>programs</h2>
                <h3>count: {programs ? programs.length : 0}</h3>
                {programs &&
                    programs.map(({ title, slug }) => (
                        <div key={slug}>
                            <RouteLink route="program" program={slug}>
                                {title}
                            </RouteLink>
                        </div>
                    ))}
            </div>
        )
    }
}
