import Router from 'koa-router'
import indexCtrl from '../controllers/indexCtrl'
import usersCtrl from '../controllers/usersCtrl'
const router = new Router()
router.prefix('/api')

router.get('/', indexCtrl)
router.get('/users', usersCtrl)

export default router
