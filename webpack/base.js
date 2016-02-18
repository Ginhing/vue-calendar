var webpack = require("webpack")
var pkg = require('../package.json')
var dependencies = Object.keys(pkg.peerDependencies)
                         .map(k => ( {[k]: `commonjs ${k}`} ))

module.exports = {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
    entry: './src/main.vue',
    output: {
        path: './dist',
        filename: 'vue-calendar.js',
        libraryTarget: 'commonjs'
    },
    externals: dependencies,
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    },
    babel: {
        presets: ['es2015', 'stage-2'],
        plugins: ['transform-runtime']
    },
    devtool: '#source-map'
}
