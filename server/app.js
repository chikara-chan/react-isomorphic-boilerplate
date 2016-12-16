import Koa from 'koa'
import views from 'koa-views'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import path from 'path'
import fs from 'fs'
import router from './routes'
// import models from './models'
// import middlewares from './middlewares'

const app = new Koa()

app.use(bodyParser())
app.use(json())
app.use(logger())
app.use(views(path.join(__dirname, 'views'), {
    map: {
        html: 'ejs'
    }
}))
app.use(router.routes())
app.use(router.allowedMethods())

export default app
