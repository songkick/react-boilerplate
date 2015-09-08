var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        './index.jsx'
    ],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel'],
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    devServer: {
        contentBase: "./public",
        noInfo: true,
        hot: true,
        inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
            'Promise': 'imports?this=>global!exports?global.Promise!es6-promise'
        })
    ]
};
