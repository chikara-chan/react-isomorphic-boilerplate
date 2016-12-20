import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux';
import route from '../../client/route'
import configureStore from '../../client/common/store/configureStore'

const store = configureStore()

async function clientRoute(ctx, next) {
    let _error, _redirectLocation, _renderProps

    match({ routes: route, location: ctx.url }, (error, redirectLocation, renderProps) => {
        _error = error
        _redirectLocation = redirectLocation
        _renderProps = renderProps
    })

    if (_renderProps) {
        await ctx.render('index', {
            root: renderToString(
                <Provider store={ store }>
                    <RouterContext { ..._renderProps } />
                </Provider>
            ),
            state: store.getState()
        })
    } else {
        await next()
    }
}

export default clientRoute
