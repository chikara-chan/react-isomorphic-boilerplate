import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        const {userInfo, actions} = this.props

        return (
            <div className={styles.app}>
                <SectionMain userInfo={userInfo} actions={actions}></SectionMain>
            </div>
        )
    }
}

export default App
