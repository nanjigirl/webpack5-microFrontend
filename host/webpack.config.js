const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  devtool: false,
  entry: 'src/index.js',
  output: {
    publicPath: 'localhost://8081'
  },
  devServer: {
    port: 8081,
  },
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/, // 不打包不编译node_modules文件夹
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
              ]
            }
          }
        ]
      },
      {
        test: '\./png$/',
        type: 'assets/resource', // 对标file-loader
      },
      {
        test: '\./ico$/',
        type: 'assets/inline', // 对标url-loader 模块大小<limit base64字符串
      },
      {
        test: '\./txt$/',
        type: 'assets/source', // 对标raw-loader
      },
      {
        test: '\./jpg$/',
        type: 'assets', // 对标raw-loader, 模块大小<limit inline 否则resource
        parser: {
          dataurlCondition: {
            maxSize: 4 * 1024,
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}