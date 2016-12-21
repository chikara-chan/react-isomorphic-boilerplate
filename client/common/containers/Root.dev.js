import React, { Component } from 'react'
import DevTools from './DevTools'
import App from './App'

class Root extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <App/>
                <DevTools />
            </div>
        )
    }
}

export default Root
