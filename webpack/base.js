module.exports = {
    entry: './src/main.vue',
    output: {
        path: './dist',
        filename: 'vue-calender.js',
        libraryTarget: 'commonjs'
    },
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
