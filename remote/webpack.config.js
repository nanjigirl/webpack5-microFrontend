const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'localhost://8080'
  },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: '/\.jsx?$/',
        exclude: /node_modules/, // 不打包不编译node_modules文件夹
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-react",
              ]
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}