import * as React from 'react'
import SectionMain from '../components/SectionMain'
import '../sass/App';
import {anyObj} from '../../interface';

class Hello extends React.Component<anyObj,anyObj> {
    constructor() {
        super()
    }

    render() {
        const {actions} = this.props

        return (
            <div className={'app'}>
                <SectionMain actions={actions}></SectionMain>
            </div>
        )
    }
}

export default Hello;
