import { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ConfirmModal extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { order, showConfirmModal, closeConfirmModal }=this.props;

        return (
            <Modal dialogClassName="confirm-modal"
            	   show={showConfirmModal}
                   onHide={closeConfirmModal}>
		        <a href="javascript:void(0)" onClick={closeConfirmModal}>×</a>
		        <p>确认取消订单吗</p>
		        <Button>确 定（放心点击，功能未开放）</Button>
            </Modal>
        );
    }
}


export default ConfirmModal;