import * as React from 'react'
import DevTools from './DevTools'
import Common from './Common'

import {anyObj} from '../../interface';

class Root extends React.Component<anyObj,anyObj> {
    constructor() {
        super()
        this.state = {isMounted: false}
    }

    componentDidMount() {
        this.setState({isMounted: true})
        console.log('Redux Devtools is now available. Press key "ctrl-h" to toggleVisibility. Press key "ctrl-w" to changePosition.')
    }

    render() {
        const {isMounted} = this.state,
            {children} = this.props

        return (
            <div>
                <Common>{children}</Common>
                {isMounted && <DevTools/>}
            </div>
        )
    }
}

export default Root
