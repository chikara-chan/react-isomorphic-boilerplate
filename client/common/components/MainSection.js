import React, { Component } from 'react';
import SideBar from './SideBar';
import styles from '../sass/MainSection'

class MainSection extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { children } = this.props;
        return (
            <main className={styles.main}>
                <div className={styles.left}>
                    <SideBar />
                </div>
                <div className={styles.right}>
                    {children}
                </div>
            </main>
        );
    }
}

export default MainSection;
