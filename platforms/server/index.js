import Koa from 'koa'
import middlewareRegister from './middlewareRegister'

const app = new Koa()
app.env = 'production'
middlewareRegister(app) // reg middleware

import http from 'http'
import config from '../common/config'
const server = http.createServer(app.callback())
server.listen(config.port, () => {
  console.log('App started, bind port %d, CTRL + C to terminate', config.port)
})

export default server
