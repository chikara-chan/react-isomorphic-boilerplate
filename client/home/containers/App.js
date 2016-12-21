import React, { Component } from 'react'
import MainSection from '../components/MainSection'
import styles from '../sass/App'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { orders, actions } = this.props

        return (
            <div className={styles.app}>
                <MainSection orders={orders} actions={actions}></MainSection>
            </div>
        )
    }
}

export default App
