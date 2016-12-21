import React, { Component, Children, cloneElement } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as actions from '../actions'
import styles from '../sass/App'
import '../sass/global'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children, orders, actions } = this.props

        return (
            <div className={styles.app}>
            	<Header />
            	<MainSection>
                {
                    Children.map(children, child =>
                        cloneElement(child, {
                            orders,
                            actions
                        })
                    )
                }
                </MainSection>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        orders: state.orders
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
