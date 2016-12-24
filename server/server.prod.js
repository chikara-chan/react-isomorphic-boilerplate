import 'babel-polyfill'
import serve from 'koa-static'
import path from 'path'
import views from 'koa-views'
import app from './app'
import router from './routes'
import middlewares from './middlewares'

const port = 3000

app.use(views(path.resolve(__dirname, '../views/prod'), {map: {html: 'ejs'}}))
app.use(middlewares)
app.use(router.routes())
app.use(router.allowedMethods())
app.use(serve(path.resolve(__dirname, '../dist')))
app.listen(port)
console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
