const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  
  entry: ["@babel/polyfill", path.resolve(__dirname, './source/client.js')],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: "/(node_modules)/",
        options: {
          presets: ['@babel/preset-env','@babel/preset-react'],
          // plugins: ['styled-jsx/babel']
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader?modules=true&localIdentName=[hash:base64:15]"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  target: 'web',
}

module.exports = config;
