import React, { Component } from 'react'
import styles from '../sass/MainSection'

class MainSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { orders, actions } = this.props

        return (
            <section className={styles.mainSection}>
                Explore
            </section>
        )
    }
}

export default MainSection
