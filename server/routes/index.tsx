import * as fs from 'fs'
import * as path from 'path'
import user from './user';
import * as Router from 'koa-router'

const router = Router({ prefix: '/api' });
let subRouter = user;
router.use(subRouter.routes(), subRouter.allowedMethods())

export default router
