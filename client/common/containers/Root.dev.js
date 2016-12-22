import React, { Component } from 'react'
import DevTools from './DevTools'
import App from './App'

class Root extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMounted: false
        }
    }

    componentDidMount() {
        this.setState({
            isMounted: true
        })
        console.log('Redux Devtools is now available. Press key "ctrl-h" to toggleVisibility. Press key "ctrl-w" to changePosition.')
    }

    render() {
        const { isMounted } = this.state
        const { children } = this.props

        return (
            <div>
                <App>{children}</App>
                {isMounted && <DevTools/>}
            </div>
        )
    }
}

export default Root
