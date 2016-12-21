if (process.env.NODE_ENV === 'production') {
    module.exports = require('./App')
} else {
    module.exports = require('./Root.dev')
}
