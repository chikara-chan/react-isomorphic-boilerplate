// Production server entry point
import 'babel-polyfill'
import serve from 'koa-static'
import path from 'path'
import app from './app'

const port = 3000

app.use(serve(path.resolve(__dirname, '../dist')))
app.listen(port)

console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
