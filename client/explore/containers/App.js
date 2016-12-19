import React, { Component } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import styles from '../sass/App'

class App extends Component {
    render() {
        const { orders, actions } = this.props;

        return (
            <div className={styles.app}>
                <Header />
                <MainSection orders={orders} actions={actions}></MainSection>
            </div>
        );
    }
}

export default App
