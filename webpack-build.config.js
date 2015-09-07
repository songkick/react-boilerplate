var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './index.jsx',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loaders: ['babel']
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
            'Promise': 'imports?this=>global!exports?global.Promise!es6-promise'
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ]
};
