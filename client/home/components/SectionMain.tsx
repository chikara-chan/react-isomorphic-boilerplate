import * as React from 'react'
import '../sass/SectionMain.scss';
import {anyObj} from '../../interface';

class SectionMain extends React.Component<anyObj,anyObj> {
    constructor() {
        super()
    }

    render() {
        return (
            <section className={'section-main'}>
                Home
            </section>
        )
    }
}

export default SectionMain
