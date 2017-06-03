export default async function getUserInfo(ctx,next) {
    ctx.body = {
        name: 'Chikara Chan',
        gender: 'male',
        age: 20
    }
}