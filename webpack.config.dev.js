// ------------------------------------------------------------------ COMMONS
var webpack = require('webpack')
var path = require('path');
// ------------------------------------------------------------------ PLUGINS
// Make sure any plugins are exported there
var root = process.cwd()
var __devProxy = require(path.join(root, "config", "./dev-server-proxy"))
var CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = function(env) {
    return {
        context: __dirname,
        entry: [
            'react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', root + "/src/main/script/index.jsx",
            root + "/src/main/sass/main.sass"
        ],
        output: {
            path: path.join(root, 'dist', 'dev'),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.sass$/,
                    use: ['style-loader', 'css-loader', 'sass-loader?indentedSyntax=true']
                }, {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader?indentedSynax=false']
                }, {
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                }, {
                    test: /\.jsx?$/,
                    use: [
                    	'react-hot-loader/webpack', 'babel-loader?presets[]=react,presets[]=es2015,plugins[]=transform-decorators-legacy'
                    ],
                    exclude: /node_modules/
                }
            ]
        },
        devServer: {
            port: 3000,
            contentBase: path.join(root, 'dist', 'dev'),
            historyApiFallback: true,
            hot: true,
            proxy: __devProxy(env)
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new CopyWebpackPlugin([
                {
                    from: root + '/src/index.html',
                    to: path.join(root, "dist", "dev"),
                    flatten: true
                }
            ]),
            new webpack.LoaderOptionsPlugin({
                options: {
                    devTool: 'sourcemap'
                }
            })
        ],
        resolve: {
            extensions: [
                '.webpack.js',
                '.web.js',
                '.js',
                '.html',
                '.jsx',
                '.png',
                '.woff',
                '.woff2',
                '.eot',
                '.ttf',
                '.svg'
            ]
        }
    }
};
