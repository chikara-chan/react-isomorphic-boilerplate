import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import actions from '../actions'
import '../sass/Common.scss';
import '../sass/global'

const { Children, Component, cloneElement } = React;

class Common extends React.Component<{}, {}> {
    constructor() {
        super()
    }

    render() {
        const { children, ...props } = this.props

        return (
            <div className={'common_app'}>
                <Header />
                <Navbar />
                <Main>
                    {Children.map(children, (child: any) => {
                        let ele= cloneElement(child, { ...props })
                        console.info(ele)
                        return ele;
                    }

                    )}
                </Main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Common)
