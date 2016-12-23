import React, { Component, Children, cloneElement } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import * as actions from '../actions'
import styles from '../sass/App'
import '../sass/global'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children, userInfo, actions } = this.props

        return (
            <div className={styles.app}>
                <Header/>
                <Navbar/>
                <Main>
                    {Children.map(children, child =>
                        cloneElement(child, {
                            userInfo,
                            actions
                        })
                    )}
                </Main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
