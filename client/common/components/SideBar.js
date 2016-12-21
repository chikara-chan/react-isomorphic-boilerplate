import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import styles from '../sass/SideBar'

class SideBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children } = this.props
        return (
            <div className={styles.sideBar}>
                <IndexLink className={styles.link} activeClassName={styles.active} to="">home</IndexLink>
                <Link className={styles.link} activeClassName={styles.active} to="explore">explore</Link>
                <Link className={styles.link} activeClassName={styles.active} to="about">about</Link>
            </div>
        )
    }
}

export default SideBar
