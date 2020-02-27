import React from 'react'
import { loadMenu } from '../not_used/program/logic/menu'

export default class ProgramPage extends React.Component {
    static async getInitialProps({ query: { program: slug }, store }) {
        return { menu: await loadMenu(store, slug) }
    }

    render() {
        const { menu } = this.props
        console.log('+++++++++++menu', JSON.stringify(menu, null, 2))
        return (
            <div>
                <h2>menu</h2>
            </div>
        )
    }
}
