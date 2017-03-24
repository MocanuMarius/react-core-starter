// ------------------------------------------------------------------ COMMONS
var webpack = require('webpack')
var path = require('path');


var root = process.cwd()
let ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
var CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = function(env) {
    return {
        context: __dirname,
        entry: [
            root + "/src/main/script/index.jsx",
            root + "/src/main/sass/main.sass",
			root + "/src/main/sass/icons.sass"
        ],
        output: {
            path: path.join(root, 'dist', 'production'),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.sass$/,
                    use: extractCSS.extract(['css-loader', 'sass-loader?indentedSyntax=true'])
                }, {
                    test: /\.scss$/i,
                    use: extractCSS.extract(['css-loader', 'sass-loader?indentedSynax=false'])
                }, {
                    test: /\.jsx?$/,
                    use: ['babel-loader?presets[]=react,presets[]=es2015,plugins[]=transform-decorators-legacy'],
                    exclude: /node_modules/
                },{
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                }
            ]
        },
        plugins: [
            extractCSS,
            new CopyWebpackPlugin([
				{
					from:  root + '/src/main/static/index.html',
					to: path.join(root, "dist", "production"),
				},
                {
                    from: {
						glob: root + '/src/main/static/**',
					},
					to: path.join(root, "dist", "production", "static"),
					flatten: true
                }
            ]),
            new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
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
