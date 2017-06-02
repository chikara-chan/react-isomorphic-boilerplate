import * as Router from 'koa-router'
// import getUserInfo from '../controllers/user'

const router = Router({prefix: '/user'})

router.get('/getUserInfo', async (ctx,next)=> {
    ctx.body = {
        name: 'Chikara Chan',
        gender: 'male',
        age: 20
    }
})

export default router
