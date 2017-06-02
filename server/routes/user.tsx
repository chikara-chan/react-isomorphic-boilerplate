import * as Router from 'koa-router'
import getUserInfo from '../controllers/user'

const user = Router({prefix: '/user'})

user.get('/getUserInfo', getUserInfo)

export default user
