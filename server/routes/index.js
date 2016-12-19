import fs from 'fs'
import path from 'path'
import Router from 'koa-router'
import home from '../controllers/home'

const router = new Router()
let subRouter

fs.readdirSync(__dirname)
    .filter(function(filename) {
        return filename !== path.basename(__filename)
    })
    .forEach(function(filename) {
        subRouter = require(`./${filename}`).default
        router.use(subRouter.routes(), subRouter.allowedMethods())
    })

export default router
