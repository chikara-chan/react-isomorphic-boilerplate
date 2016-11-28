export default async (ctx, next) => {
  ctx.body = {
    status: 0,
    info: 'this is a demo api with path /api'
  }
}
