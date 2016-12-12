import { Component } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import '../sass';

class Root extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { alert, children } = this.props;
        return (
            <div className="root">
            	<Header />
            	<MainSection>{children}</MainSection>
            </div>
        );
    }
}

export default Root;
