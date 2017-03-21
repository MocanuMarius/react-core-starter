// ------------------------------------------------------------------ COMMONS
var webpack = require('webpack')
var path = require('path');
// ------------------------------------------------------------------ PLUGINS
// Make sure any plugins are exported there
var plugins = require('./plugins')
var root = process.cwd()
var __devProxy = require(path.join(root, "config", "./dev-server-proxy"))


module.exports = function (env) {
	return {
    context: __dirname,
    entry: [
        'react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', root + "/src/main/script/index.jsx",
        root + "/src/main/sass/main.sass"
    ],
    output: {
        path: path.join(root, 'dist', 'www'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [
                    'react-hot-loader/webpack', 'babel-loader?presets[]=react,presets[]=es2015'
                ],
                exclude: /node_modules/
            }, {
                test: /\.sass$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader?indentedSyntax=true']
            }, {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: path.join(root, 'dist', 'www'),
        historyApiFallback: true,
        hot: true,
		proxy: __devProxy(env)
    },
    plugins: [
        new plugins.CopyWebpackPlugin([
            {
                from: {
                    glob: root + "/src/**/www/**/*.html",
                    dot: true
                },
                to: path.join(root, "dist", "www", "partials"),
                flatten: true
            }, {
                from: root + '/src/index.html',
                to: path.join(root, "dist", "www"),
                flatten: true
            }
        ]),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.js', '.html']
    }
}
};
