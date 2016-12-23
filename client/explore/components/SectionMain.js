import React, {Component} from 'react'
import styles from '../sass/SectionMain'

class SectionMain extends Component {
    constructor(props) {
        super(props)
    }

    handleFetch() {
        const {actions} = this.props

        actions.fetchUserInfo()
    }

    handleClear() {
        const {actions} = this.props

        actions.replaceUserInfo(null)
    }

    render() {
        const {userInfo} = this.props

        return (
            <section className={styles.sectionMain}>
                Explore
                <a href="javascript:void(0)"
                    className={styles.btn}
                    onClick={this.handleFetch.bind(this)}>
                    Fetch Data
                </a>
                <a href="javascript:void(0)"
                    className={styles.btn}
                    onClick={this.handleClear.bind(this)}>
                    Clear
                </a>
                <br/>
                {userInfo && JSON.stringify(userInfo)}
            </section>
        )
    }
}

export default SectionMain
