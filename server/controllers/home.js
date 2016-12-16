import React from 'react'
import { renderToString } from 'react-dom/server'
import Root from '../../client/order-monitor/containers/Root'
import configureStore from '../../client/order-monitor/store/configureStore'

const store = configureStore()

async function home(ctx, next) {
    await ctx.render('index', {
        root: renderToString(<Root store={store}/>)
    })
}

export default home
