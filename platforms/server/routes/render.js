import { match } from 'react-router'
import renderCtrl from '../controllers/serverRenderCtrl'

function _match (location) {
  return new Promise((resolve, reject) => {
    match(location, (error, redirectLocation, renderProps) => {
      if (error) {
        return reject(error)
      }
      resolve({redirectLocation, renderProps})
    })
  })
}
export default async (ctx, next) => {
  try {
    const { redirectLocation, renderProps } = await _match({ routes: require('../../../app/routes'), location: ctx.url })
    if (redirectLocation) {
      ctx.redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      await renderCtrl(ctx, next, renderProps)
    } else {
      await next()
    }
  } catch (e) {
    console.error('Server-Render Error Occurs: %s', e.stack)
    await ctx.render('500', {
      msg: ctx.app.env === 'development' ? e.message : false
    })
  }
}
