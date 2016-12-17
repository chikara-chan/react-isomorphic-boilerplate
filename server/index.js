import serve from 'koa-static'
import app from './app'

const port = 3000

app.use(serve(path.resolve(__dirname, '../dist')));
app.listen(port)
