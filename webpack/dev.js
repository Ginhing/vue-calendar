var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var base = require('./base')

module.exports = Object.assign({}, base, {
    entry: './index.js',
    output: {
        path: './example',
        filename: 'index.js'
    },
    externals: [],
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new HtmlWebpackPlugin({template: './index.html'})
    ]
})
