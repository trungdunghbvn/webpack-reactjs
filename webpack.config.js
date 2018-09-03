
const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname , '/dist'),
    filename: 'build.js'
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude :'/node_modules',
        loader : 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
            options: {
                includePaths: ["src/assets/css", "src/assets/css"]
            }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV':JSON.stringify('production')
      }
    })
  ]
};

module.exports = config;