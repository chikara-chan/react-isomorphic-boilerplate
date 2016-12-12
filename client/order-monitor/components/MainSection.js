import { Component } from 'react';
import { Nav, NavItem, Checkbox, Alert } from 'react-bootstrap';
import classnames from 'classnames';
import SubNav from './SubNav';
import OrderList from './OrderList';
import LaserBeam from './LaserBeam';
import { SHOW_DANGER, SHOW_WARN, SHOW_REJECT, SHOW_TIMEOUT } from '../constants/PrimaryOrderTypes.js';

class MainSection extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeKey: 0,
            primaryOrderType: SHOW_DANGER,
            activeCheckboxIndex: -1,
            offsetTop: 0,
            showLoading: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this._onScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._onScroll);
    }

    _onScroll() {
        const { scrollTop } = document.body;
        if (scrollTop >= 160) {
           this.setState({
                offsetTop: scrollTop - 160
           })
        } else {
           this.setState({
                offsetTop: 0
           })
       }
    }
 
    _onSelect(eventKey) {
        this.setState({activeKey: eventKey});
    }

    _onClick(primaryOrderType) {
        const { actions } = this.props;
        const { tabContent} = this.refs;

        actions.getOrder(primaryOrderType);
        this.setState({
            primaryOrderType,
            showLoading: !this.state.showLoading
        });
        tabContent.setState({
            activeKey: 0
        });
    }

    _onClickCheckbox(index) {
        const { activeCheckboxIndex } = this.state;
        if(index == activeCheckboxIndex){
            this.setState({
                activeCheckboxIndex: -1
            });
        } else {
            this.setState({
                activeCheckboxIndex: index,
            });
        }
    }

    render() {
        const { orders, actions } = this.props;
        const { activeKey, primaryOrderType, activeCheckboxIndex, offsetTop, showLoading } = this.state;
        const navEntries = [{
            primaryOrderType: SHOW_DANGER,
            text: '高危订单(23)'
        }, {
            primaryOrderType: SHOW_WARN,
            text: '预警订单(45)'
        }, {
            primaryOrderType: SHOW_REJECT,
            text: '已拒单(23)'
        }, {
            primaryOrderType: SHOW_TIMEOUT,
            text: '超时送达(23)'
        },];
        const checkboxEntries = [{
            text: '未催单'
        }, {
            text: '已催单'
        }];

        return (
            <section className="main-section">
                <div className="tab-wrap" style={{top: offsetTop}}>
                    <Nav bsStyle="tabs"
                         activeKey={this.state.activeKey}
                         onSelect={this._onSelect.bind(this)}>
                        {navEntries.map((entry, index) => 
                            <NavItem eventKey={index}
                                     onClick={this._onClick.bind(this, entry.primaryOrderType)}>
                                     {entry.text}
                            </NavItem>
                        )}
                    </Nav>
                    <SubNav ref="tabContent"
                            primaryOrderType={primaryOrderType}
                            actions={actions} />
                    <Alert bsStyle="warning">
                        有新高危订单
                        <a href="#" className="alert-link">
                            立即刷新
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                    </Alert>
                    <div className="filter-wrap">
                        <span>共23笔订单</span>
                        {checkboxEntries.map((entry, index) => {
                            return (
                                <Checkbox className={classnames({hide: activeKey == 0 ? false : true})}
                                          checked={activeCheckboxIndex == index ? true: false}
                                          onClick={this._onClickCheckbox.bind(this, index)}
                                          inline>
                                          {entry.text}
                                </Checkbox>
                            );
                        })}
                    </div>
                </div>
                <OrderList orders={orders}
                           actions={actions} />
                <LaserBeam show={showLoading}/>
            </section>
        );
    }
}

export default MainSection;