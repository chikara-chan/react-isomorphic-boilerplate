import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {userInfo, actions} = this.props

        return (
            <section className={styles.app}>
                <SectionMain userInfo={userInfo} actions={actions}></SectionMain>
            </section>
        )
    }
}

export default App
