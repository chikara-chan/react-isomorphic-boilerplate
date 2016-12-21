import React, { Component } from 'react'
import SideBar from './SideBar'
import styles from '../sass/MainSection'

class MainSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children } = this.props
        return (
            <main className={styles.mainSection}>
                <div className={styles.left}>
                    <SideBar />
                </div>
                <div className={styles.right}>
                    {children}
                </div>
            </main>
        )
    }
}

export default MainSection
