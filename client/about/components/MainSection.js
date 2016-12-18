import React, { Component } from 'react';
import { Nav, NavItem, Checkbox, Alert } from 'react-bootstrap';
import classnames from 'classnames';
import styles from '../sass/MainSection'

class MainSection extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        const { orders, actions } = this.props;

        return (
            <section className={styles.mainSection}>
                    About
            </section>
        );
    }
}

export default MainSection;
