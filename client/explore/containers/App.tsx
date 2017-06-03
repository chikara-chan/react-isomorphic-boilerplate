import * as React from 'react'
import SectionMain from '../components/SectionMain'
import '../sass/App.scss';
import {anyObj} from '../../interface';

class Explore extends React.Component<anyObj,anyObj> {
    constructor() {
        super()
    }

    render() {
        const {userInfo, actions} = this.props

        return (
            <div className={'app'}>
                <SectionMain userInfo={userInfo} actions={actions}></SectionMain>
            </div>
        )
    }
}

export default Explore;
