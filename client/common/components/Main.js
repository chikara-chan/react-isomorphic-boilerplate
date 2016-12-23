import React, {Component} from 'react'
import styles from '../sass/Main'

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {children} = this.props

        return (
            <main className={styles.main}>
                {children}
            </main>
        )
    }
}

export default Main
