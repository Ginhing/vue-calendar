var base = require('./base')

module.exports = Object.assign({}, base, {
    entry: './index.js',
    output: {
        path: './dist',
        publicPath: '/dist',
        filename: 'index.js'
    }
})
