import React, { Component } from 'react';
import { PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class SideBar extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { children } = this.props;
        return (
            <div className="side-bar">
			  	<PanelGroup accordion="true" >
			    	<Panel header="高危订单监控中心"
                           defaultActiveKey="0">
					    <ListGroup fill>
                            <ListGroupItem className="active">
                                <a>高危订单监控</a>
                            </ListGroupItem>
                            <ListGroupItem>
                                <a>订单查询</a>
                            </ListGroupItem>
					    </ListGroup>
			    	</Panel>
			  	</PanelGroup>
            </div>
        );
    }
}

export default SideBar;
