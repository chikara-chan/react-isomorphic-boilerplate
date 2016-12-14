import React, { Component } from 'react';
import OrderListItem from './OrderListItem';

class OrderList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeIndex: -1
        };
    }

    render() {
        const { orders, actions, hideCheckbox } = this.props,
            { activeIndex } = this.state;
        return (
            <div className="order-list">
		        <ul className="todo-list">
		            {orders.filter(order => {
                        switch (activeIndex) {
                            case -1:
                                return true;
                            case 0:
                                return true;
                            case 1:
                                return false;
                        }
                    }).map(order =>
                        <OrderListItem order={order} key={order.id}/>
		            )}
		        </ul>
            </div>
        );
    }
}

export default OrderList;
