import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import FormSection from '../components/FormSection';
import MainSection from '../components/MainSection';
import * as actions from '../actions';
import '../sass';

class App extends Component {
    render() {
        const { orders, actions } = this.props;
        return (
            <div className="app">
                <Header />
                <FormSection actions={actions}></FormSection>
                <MainSection orders={orders} actions={actions}></MainSection>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        orders: state.orders
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
function t(){
    console.log('aa')
}
export default connect(
    mapStateToProps,
	mapDispatchToProps
)(App);
