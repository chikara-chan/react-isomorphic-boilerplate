import * as React from 'react'
import '../sass/SectionMain.scss';
import {anyObj} from '../../interface';

class SectionMain extends React.Component<anyObj,anyObj> {
    constructor(props) {
        super(props);
        console.info(this.props);
        this.state={age:24};
    }

    componentWillMount(){
        console.info('componentWillMount');
    }

    componentDidMount(){
        console.info('componentDidMount');
        this.setState({age:23});
    }

    render() {
        console.info('render');
        return (
            <section className={'section-main'}>
                Hello,i am {this.state.age}
            </section>
        )
    }
}

export default SectionMain
