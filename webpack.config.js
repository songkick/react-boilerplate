var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var distDir = 'dist';
var distPath = path.join(__dirname, distDir);

var config = module.exports = {
    entry: [
        './src/index.jsx'
    ],
    devtool: 'source-map',
    output: {
        path: distPath,
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

        // clean the dist folder
        new CleanWebpackPlugin([distDir]),

        // provide global access to fetch and promise polyfills
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
            'Promise': 'imports?this=>global!exports?global.Promise!es6-promise'
        }),

        // compule the index template
        new HtmlWebpackPlugin({
            template: 'index.tpl.html',
            inject: 'body',
            minify: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeCommentsFromCDATA: true,
                removeOptionalTags: true
            }
        })

    ]
};

if (process.env.NODE_ENV === 'production') {
    // when building for production
    // minify the js
    var uglifier = new webpack.optimize.UglifyJsPlugin({
        minimize: true
    });
    // add the file has to the output bundle
    config.output.filename = 'bundle.[hash].js';
    config.plugins.push(uglifier);
} else {config.entry.push('webpack-hot-middleware/client');
    config.entry.push('webpack-hot-middleware/client');
    config.plugins.push( new webpack.HotModuleReplacementPlugin() );
    config.plugins.push( new webpack.NoErrorsPlugin() );
}
