import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux';
import Root from './common/containers/Root'
import route from './route'
import configureStore from './common/store/configureStore'

const store = configureStore(window.REDUX_STATE)

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            { route }
        </Router>
    </Provider>,
    document.getElementById('root')
)
// testtest
