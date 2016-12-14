import React, { Component } from 'react';
import { NavDropdown, MenuItem, Nav } from 'react-bootstrap';
// import imgLogo from '../assets/logo.png';
// import imgMenu from '../assets/menu.png';
// import imgAvatar from '../assets/avatar.png';

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <header>
            	<div className="left">
                    <img className="img-1"
                         src={''} />
                    <span>CRM</span>
                    <img className="img-2"
                         src={''} />
            	</div>
            	<div className="right">
                    <Nav className="menu">
                        <NavDropdown eventKey="0"
                                     title="你好，张三！">
                            <MenuItem >注销</MenuItem>
                        </NavDropdown>
                    </Nav>
            		<img src={''} />
            	</div>
            </header>
        );
    }
}

export default Header;
