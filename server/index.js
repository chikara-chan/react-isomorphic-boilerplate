import Koa from 'koa'
import views from 'koa-views'
import serve from 'koa-static'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import path from 'path'
import router from './routes'
// import models from './models'
// import middlewares from './middlewares'

const app = new Koa(),
    port = 3000

app.use(bodyParser())
app.use(json())
app.use(logger())
app.use(views(path.join(__dirname, 'views'), {
    map: {
        html: 'ejs'
    }
}))
app.use(serve(path.resolve(__dirname, '../dist')));
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(port)

export default app
