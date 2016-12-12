import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class FormSection extends Component {
    constructor(props, context) {
        super(props, context);
    }

    _onSubmit(e) {
        e.preventDefault();
        const { actions } = this.props;
        const data = {
            city: findDOMNode(this.refs.city).value,
            classify: findDOMNode(this.refs.classify).value,
            keywords: findDOMNode(this.refs.keywords).value,
            source: findDOMNode(this.refs.source).value
        }
        actions.search(data);
    }

    render() {
        return (
            <section className="form-section">
                <Form inline>
                    <FormGroup>
                        <FormControl ref="city"
                                     componentClass="select"
                                     placeholder="select">
                            <option value="select">全部城市</option>
                            <option value="other">北京</option>
                            <option value="other">广州</option>
                            <option value="other">深圳</option>
                            <option value="other">上海</option>
                            <option value="other">杭州</option>
                            <option value="other">苏州</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl ref="classify"
                                     componentClass="select"
                                     placeholder="select">
                            <option value="select">店铺名称</option>
                            <option value="other">店铺ID</option>
                            <option value="other">小二ID</option>
                            <option value="other">小二主管</option>
                        </FormControl>
                        <FormControl ref="keywords"
                                     type="text"
                                     placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <FormControl ref="source"
                                     componentClass="select"
                                     placeholder="select">
                            <option value="select">全部订单来源</option>
                            <option value="other">闪电购</option>
                            <option value="other">手淘</option>
                            <option value="other">美团</option>
                            <option value="other">饿了么</option>
                            <option value="other">自营批发订单</option>
                            <option value="other">其它</option>
                        </FormControl>
                    </FormGroup>
                    <Button type="submit"
                            onClick={this._onSubmit.bind(this)}>
                        查 询
                    </Button>
                </Form>
            </section>
        );
    }
}

export default FormSection;
