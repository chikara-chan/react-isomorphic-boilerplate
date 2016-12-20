import React, { Component } from 'react';
import { Link } from 'react-router';
import { PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import styles from '../sass/SideBar'

class SideBar extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { children } = this.props;
        return (
            <div className={styles.sideBar}>
			  	<PanelGroup accordion="true" >
			    	<Panel header=""
                           defaultActiveKey="0">
					    <ListGroup fill>
                            <ListGroupItem>
                                <Link to="">home</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="explore">explore</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="about">about</Link>
                            </ListGroupItem>
					    </ListGroup>
			    	</Panel>
			  	</PanelGroup>
            </div>
        );
    }
}

export default SideBar;
