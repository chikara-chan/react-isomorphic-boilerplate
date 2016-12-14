import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <section className="header">
            	<Breadcrumb>
                    <Breadcrumb.Item>
                        首页
                    </Breadcrumb.Item>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    <Breadcrumb.Item>
                        高危订单监控中心
                    </Breadcrumb.Item>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    <Breadcrumb.Item className="active">
                        高危订单监控
                    </Breadcrumb.Item>
                </Breadcrumb>
            </section>
        );
    }
}

export default Header;
