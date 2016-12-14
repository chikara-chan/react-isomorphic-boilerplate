import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import classnames from 'classnames';
import { SHOW_DANGER, SHOW_WARN, SHOW_REJECT, SHOW_TIMEOUT } from '../constants/PrimaryOrderTypes.js';
import { SHOW_DANGER_ALL, SHOW_DANGER_NO_REACH, SHOW_DANGER_NO_RECEIVE, SHOW_DANGER_NO_SEND } from '../constants/DangerOrderTypes.js';
import { SHOW_WARN_ALL, SHOW_WARN_NO_ACCEPT, SHOW_WARN_NO_RECEIVE, SHOW_WARN_NO_SEND, SHOW_WARN_NO_REACH } from '../constants/WarnOrderTypes.js';
import { SHOW_REJECT_ALL, SHOW_REJECT_MANUAL, SHOW_REJECT_AUTO } from '../constants/RejectOrderTypes.js';

class SubNav extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { activeKey: 0 };
    }

    _onSelect(activeKey) {
        this.setState({activeKey});
    }

    _onClick(primaryOrderType, secondaryOrderType) {
        const { actions } = this.props;
        actions.getOrder(primaryOrderType, secondaryOrderType);
    }

    render() {
        const { actions, primaryOrderType } = this.props;
        let entries;
        switch (primaryOrderType) {
            case SHOW_DANGER:
                entries = [{
                    secondaryOrderType: SHOW_DANGER_ALL,
                    text: '全部'
                }, {
                    secondaryOrderType: SHOW_DANGER_NO_REACH,
                    text: '超50分钟未送达'
                }, {
                    secondaryOrderType: SHOW_DANGER_NO_RECEIVE,
                    text: '超7分钟配送员未领单'
                }, {
                    secondaryOrderType: SHOW_DANGER_NO_SEND,
                    text: '超25分钟未发货'
                }];
                break;
            case SHOW_WARN:
                entries = [{
                    secondaryOrderType: SHOW_WARN_ALL,
                    text: '全部'
                }, {
                    secondaryOrderType: SHOW_WARN_NO_ACCEPT,
                    text: '超1分钟未接单'
                }, {
                    secondaryOrderType: SHOW_WARN_NO_RECEIVE,
                    text: '超3分钟配送员未领单'
                }, {
                    secondaryOrderType: SHOW_WARN_NO_SEND,
                    text: '超20分钟未发货'
                }, {
                    secondaryOrderType: SHOW_WARN_NO_REACH,
                    text: '超40分钟未送达'
                }];
                break;
            case SHOW_REJECT:
                entries = [{
                    secondaryOrderType: SHOW_REJECT_ALL,
                    text: '全部'
                }, {
                    secondaryOrderType: SHOW_REJECT_MANUAL,
                    text: '商家主动拒单'
                }, {
                    secondaryOrderType: SHOW_REJECT_AUTO,
                    text: '超时自动拒单'
                }];
                break;
            case SHOW_TIMEOUT:
                entries = [];
                break;
        }
        return (
            <div className={classnames('sub-nav',{hide: entries.length == 0 ? true : false})}>
                <Nav bsStyle="pills"
                     activeKey={this.state.activeKey}
                     onSelect={this._onSelect.bind(this)}>
                    {entries.map((entry, index) =>
                        <NavItem eventKey={index}
                                 key={entry.text}
                                 onClick={this._onClick.bind(this, primaryOrderType, entry.secondaryOrderType)}>
                            {entry.text}
                        </NavItem>
                    )}
                </Nav>
            </div>
        );
    }
}

export default SubNav;
