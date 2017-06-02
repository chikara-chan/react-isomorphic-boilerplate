import * as React from 'react'
import SectionMain from '../components/SectionMain'
import '../sass/App.scss';
import {anyObj} from '../../interface';

class Home extends React.Component<anyObj,anyObj> {
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

export default Home
