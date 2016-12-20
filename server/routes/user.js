import Router from 'koa-router'
import user from '../controllers/user'

const router = new Router()

router.get('/api/user/getUserInfo', user.getUserInfo)

export default router
