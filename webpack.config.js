var webpack = require('webpack')

var env = process.env.BABEL_ENV
var config = {
    entry: ['./src'],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    output: {
        path: 'dist',
        filename: 'index.js',
        library: 'MargaretFetcher',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ]
};

if (env === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true,
                warnings: false
            }
        })
    )
}

module.exports = config
