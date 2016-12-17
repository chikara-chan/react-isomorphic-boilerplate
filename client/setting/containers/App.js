import React, { Component } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import '../sass';

class App extends Component {
    render() {
        const { orders, actions } = this.props;

        return (
            <div className="app">
                <Header />
                <MainSection orders={orders} actions={actions}></MainSection>
            </div>
        );
    }
}

export default App
