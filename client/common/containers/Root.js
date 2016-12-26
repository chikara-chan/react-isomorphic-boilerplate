if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Common')
} else {
    module.exports = require('./Root.dev')
}
