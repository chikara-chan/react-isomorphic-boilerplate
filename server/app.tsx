import * as Koa from 'koa'
import * as json from 'koa-json'
import * as bodyParser from 'koa-bodyparser'
import * as logger from 'koa-logger'
import * as session from 'koa-session'
import * as compress from 'koa-compress'
import * as convert from 'koa-convert'

const app = new Koa()

app.keys = ['this is a fucking secret']
app.use(convert(session(app)))
app.use(compress())
app.use(bodyParser())
app.use(json())
app.use(logger())

export default app
