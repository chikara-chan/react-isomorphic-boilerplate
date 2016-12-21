import Koa from 'koa'
import views from 'koa-views'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import session from 'koa-session'
import compress from 'koa-compress'
import path from 'path'
import router from './routes'
import middlewares from './middlewares'

const app = new Koa()

app.keys = ['this my secret', 'fuck you all']

app.use(session(app))
app.use(compress())
app.use(bodyParser())
app.use(json())
app.use(logger())
app.use(views(path.join(__dirname, 'views'), {
    map: {
        html: 'ejs'
    }
}))
app.use(middlewares)
app.use(router.routes())
app.use(router.allowedMethods())

export default app
