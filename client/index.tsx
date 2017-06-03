import * as React from 'react'
import {render} from 'react-dom'
import {Router, match, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import RootRouter from './routes'
import configureStore from './common/store/configureStore'

declare const window:any;

const store = configureStore(window.REDUX_STATE)

// match({history: browserHistory, routes}, (error, redirectLocation, renderProps) => {
    render(
        <Provider store={store}>
            <Router history={browserHistory}>
                {RootRouter(browserHistory)}
            </Router>
        </Provider>,
        document.getElementById('root')
    )
// })
