import * as React from 'react'
import '../sass/SectionMain.scss';
import {anyObj} from '../../interface';

class SectionMain extends React.Component<anyObj,anyObj> {
    constructor() {
        super()
    }

    handleFetch() {
        const {actions} = this.props

        actions.fetchUserInfo()
    }

    handleClear() {
        const {actions} = this.props

        actions.clearUserInfo()
    }

    render() {
        const {userInfo} = this.props

        return (
            <section className={'section-main'}>
                Explore
                <a href="javascript:void(0)"
                    className={'btn'}
                    onClick={this.handleFetch.bind(this)}>
                    Fetch Data
                </a>
                <a href="javascript:void(0)"
                    className={'btn'}
                    onClick={this.handleClear.bind(this)}>
                    Clear
                </a>
                <br/>
                <span className={'info'}>{userInfo && JSON.stringify(userInfo)}</span>
            </section>
        )
    }
}

export default SectionMain
