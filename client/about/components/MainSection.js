import React, { Component } from 'react';
import { Nav, NavItem, Checkbox, Alert } from 'react-bootstrap';
import classnames from 'classnames';

class MainSection extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        const { orders, actions } = this.props;

        return (
            <section className="main-section">
                About
            </section>
        );
    }
}

export default MainSection;
