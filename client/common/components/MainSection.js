import { Component } from 'react';
import SideBar from './SideBar';

class MainSection extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { children } = this.props;
        return (
            <main>
                <div className="left">
                    <SideBar />
                </div>
                <div className="right">
                    {children}
                </div>
            </main>
        );
    }
}

export default MainSection;