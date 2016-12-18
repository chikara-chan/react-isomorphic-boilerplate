import React, { Component } from 'react';
import { NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import styles from '../sass/Header'
// import imgLogo from '../assets/logo.png';
// import imgMenu from '../assets/menu.png';
// import imgAvatar from '../assets/avatar.png';

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <header className={styles.header}>
            	<div className={styles.left}>
                    <img className={styles.img1}
                         src={''} />
                    <span className={styles.span}>CRM</span>
                    <img className={styles.img2}
                         src={''} />
            	</div>
            	<div className={styles.right}>
                    <Nav className={styles.menu}>
                        <NavDropdown eventKey="0"
                                     title="你好，张三！">
                            <MenuItem >注销</MenuItem>
                        </NavDropdown>
                    </Nav>
            		<img className={styles.img} src={''} />
            	</div>
            </header>
        );
    }
}

export default Header;
