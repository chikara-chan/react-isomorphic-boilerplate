import * as React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext,browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import RootRouter from '../../client/routes'
import configureStore from '../../client/common/store/configureStore'

const store = configureStore()

export default async function clientRoute(ctx, next) {
    let _renderProps

    let routes=RootRouter(browserHistory);

    match({routes, location: ctx.url}, (error, redirectLocation, renderProps) => {
        _renderProps = renderProps
    })

    if (_renderProps) {
        await ctx.render('index', {
            root: renderToString(
                <Provider store={store}>
                    <RouterContext {..._renderProps}/>
                </Provider>
            ),
            state: store.getState()
        })
    } else {
        await next()
    }
}
