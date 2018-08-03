//Require modules
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

//Configuration
module.exports = (env, argv) => {
  return {
    //Entry
    entry: ['./client/src/index.js', './client/src/styles/style.scss'],

    //Output
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, './client/dist'),
    },

    //Allow importing files ending in these extensions
    resolve: {
      extensions: [".jsx", ".js"]
    },

    //Loaders
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.scss$/,
          use: [
            argv.mode != 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader', 
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
             loader: 'file-loader'
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
        },
      ]
    },

    //Dev server config
    devServer: {
      contentBase: "/",
      watchContentBase: true,
      historyApiFallback: true,
      proxy: { 
        '/api/**': 'http://localhost:3000',
        secure: false,
        changeOrigin: true 
      }
    },

    //Plugins
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './client/template/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
    ],

    //Optimization
    optimization: argv.mode != 'production' ? {} : 
    {
      minimizer: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({
          cache: true,
          parallel: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    }
  };
};