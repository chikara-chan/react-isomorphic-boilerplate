async function getUserInfo(ctx, next) {
    ctx.body = {
        name: 'Chikara Chan',
        gender: 'male',
        age: 18
    }
}

export default {
    getUserInfo
}
