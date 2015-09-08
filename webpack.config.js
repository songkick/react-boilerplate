var webpack = require('webpack');
var path = require('path');

var config = module.exports = {
    entry: [
        './src/index.jsx'
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
            include: /src/,
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.jsx?$/,
            include: /src/,
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
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    var uglifier = new webpack.optimize.UglifyJsPlugin({
        minimize: true
    });
    config.plugins.push(uglifier);
} else {config.entry.push('webpack-hot-middleware/client');
    config.entry.push('webpack-hot-middleware/client');
    config.plugins.push( new webpack.HotModuleReplacementPlugin() );
    config.plugins.push( new webpack.NoErrorsPlugin() );
}
