async function getUserInfo(ctx, next) {
    ctx.body = {
        name: 'Chikara Chan',
        gender: 'male',
        age: 20
    }
}

export default {
    getUserInfo
}
