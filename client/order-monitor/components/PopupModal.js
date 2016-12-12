import { Component } from 'react';
import { Modal, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class PopupModal extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { order }=this.props;
        return (
            <Modal dialogClassName="popup-modal"
            	   show={this.props.showModal}
                   onHide={this.props.closeModal}>
                <div className="header">
                	<span className="text">配送员超过7分钟未领单，请立即联系配送员</span>
                	<span className="tag">闪电购订单</span>
                	<span className="serial">#17</span>
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
                    <div className="board has-bg">
	                	<div className="left">
                            <p className="title strong">催单对象：</p><p className="content strong">张三三三 (第三方站点)-18752562356</p>
                    		<p className="title">兜底闪电侠：</p><p className="content">王大锤-18797257253</p>
                    		<p className="title">商家电话：</p><p className="content">王大锤-18797257253</p>
	                	</div>
	                	<div className="right">
	                    	<p className="title">负责小二：</p><p className="content">王大锤-18797257253</p>
	                    	<p className="title">小二主管：</p><p className="content">王大锤-18797257253</p>
	                    </div>
                    </div>
                    <div className="board">
	                	<div className="left">
                            <p className="title">店铺名称：</p><p className="content">华丽超市名</p>
                            <p className="title">订单ID：</p><p className="content number">389238347838</p>
                            <p className="title">支付时间：</p><p className="content">2016-08-16   14 : 20 : 14</p>
	                	</div>
	                	<div className="right">
                            <p className="title">收货地址：</p><p className="content">杭州市西湖区蒋村商务中心</p>
                            <p className="title">收件人：</p><p className="content"pan>王大锤-18797257253</p>
	                    	<p className="title">商品信息：</p><p className="content">共13件   金额：￥139.00</p>
	                    </div>
                    </div>
                </div>
                <div className="record">
                	<div className="left">
                		催单记录：
                	</div>
                	<div className="right">
                        <div className="part">
                            <p className="operator">张晓芳<span>（2016.08.10  16:23:45）</span></p>
                            <p className="status">已联系第三方站点，处理中</p>
                            <p className="remark">备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息</p>
                        </div>
                        <div className="part">
                            <p className="operator">张晓芳<span>（2016.08.10  16:23:45）</span></p>
                            <p className="status">已联系第三方站点，处理中</p>
                        </div>
                	</div>
                </div>
                <div className="form">
                    <Form horizontal>
                        <FormGroup >
                            <label><strong>※</strong> 催单结果：</label>
                            <FormControl componentClass="select"
                                         placeholder="select">
                                <option value="select">已联系第三方站定，处理中</option>
                                <option value="other">店铺ID</option>
                                <option value="other">小二ID</option>
                                <option value="other">小二主管</option>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <label>备注：</label>
                            <FormControl componentClass="textarea" />
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit">
                                保 存
                            </Button>
                        </FormGroup>
                     </Form>
                </div>
            </Modal>
        );
    }
}


export default PopupModal;