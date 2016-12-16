import helpers from '../helpers'
import models from '../models'

async function catchError(ctx, next) {
    try {
        await next()
    } catch (e) {
        this.status = e.status || 500
        this.body = this.status
    }
    if (this.status === 404) {
        this.body = '404'
    }
}
