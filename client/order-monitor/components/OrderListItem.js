import React, { Component } from 'react';
import { Checkbox, Button } from 'react-bootstrap';
import PopupModal from './PopupModal';
import ConfirmModal from './ConfirmModal';

class OrderListItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false,
            showConfirmModal: false
        };
    }

    _closeModal() {
        this.setState({
            showModal: false
        });
    }

    _openModal() {
        this.setState({
            showModal: true
        });
    }

    _closeConfirmModal() {
        this.setState({
            showConfirmModal: false
        });
    }

    _openConfirmModal() {
        this.setState({
            showConfirmModal: true
        });
    }

    render() {
        const { order }=this.props;

        return (
            <li className="order-list-item">
                <div className="header">
                    <span className="status">未催单</span>
                    <span className="text">订单超<strong>50</strong>分钟未送达，请立即介入</span>
                    <span className="serial">#21 闪电购订单</span>
                </div>
                <div className="progress-section">
                    <div className="part">
                        <p>支付成功</p>
                    </div>
                    <div className="part">
                        <p>支付成功</p>
                    </div>
                    <div className="part">
                        <p>支付成功</p>
                    </div>
                    <div className="part">
                        <p>支付成功</p>
                    </div>
                </div>
                <div className="main">
                    <div className="left">
                        <p className="title strong">订单耗时：</p><p className="content time">51:21</p>
                        <p className="title">订单状态：</p><p className="content">待送达</p>
                        <p className="title">店铺名称：</p><p className="content">杭州西湖华丽超市华丽超市华丽超市华丽超市 华丽超市华丽超市华丽  [12435]</p>
                    </div>
                    <div className="right">
                        <p className="title strong">订单ID：</p><p className="content number">23423523523524</p>
                        <p className="title">支付时间：</p><p className="content">2016-08-16   14 : 20 : 14</p>
                        <p className="title">商品信息：</p><p className="content">共13件 金额：￥139.00</p>
                        <p className="title">收件人：</p><p className="content">王大锤-18797257253</p>
                        <p className="title">收货地址：</p><p className="content">杭州市西湖区蒋村商务中心幢层很长很长很长很长很长很长很很很长</p>
                    </div>
                </div>
                <div className="footer">
                    <Button bsStyle="primary" onClick={this._openModal.bind(this)}>
                        催 单
                    </Button>
                    <Button>
                        创建工单
                    </Button>
                    <Button onClick={this._openConfirmModal.bind(this)}>
                        取消订单
                    </Button>
                </div>
                <PopupModal showModal={this.state.showModal}
                            closeModal={this._closeModal.bind(this)} />
                <ConfirmModal showConfirmModal={this.state.showConfirmModal}
                              closeConfirmModal={this._closeConfirmModal.bind(this)} />
            </li>
        );
    }
}

export default OrderListItem;
