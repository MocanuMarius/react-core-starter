// ------------------------------------------------------------------ COMMONS
var webpack = require('webpack')
var path = require('path');
// ------------------------------------------------------------------ PLUGINS
// Make sure any plugins are exported there
var root = process.cwd()
let ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
var CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = function(env) {
    return {
        context: __dirname,
        entry: [
            root + "/src/main/script/index.jsx",
            root + "/src/main/sass/main.sass"
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
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    use: {
						loader: 'url-loader',
						options: {
							limit:100000
						}
					}
                }, {
                    test: /\.jsx?$/,
                    use: ['babel-loader?presets[]=react,presets[]=es2015'],
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            extractCSS,
            new CopyWebpackPlugin([
                {
                    from: root + '/src/index.html',
                    to: path.join(root, "dist", "production"),
                    flatten: true
                }
            ]),
            new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})
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
