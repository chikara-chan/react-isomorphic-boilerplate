import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import styles from '../sass/Navbar'

class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.navbar}>
                <IndexLink className={styles.link} activeClassName={styles.active} to="">home</IndexLink>
                <Link className={styles.link} activeClassName={styles.active} to="explore">explore</Link>
                <Link className={styles.link} activeClassName={styles.active} to="about">about</Link>
            </div>
        )
    }
}

export default Navbar
