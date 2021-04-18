const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  optimization: {
    moduleIds: 'deterministic', // 模块名称生成规则
    chunkIds: 'deterministic', // 代码块名称生成规则
  },
  resolve: {
    fallback: {
      'crypto': false,
      'stream': false,
      'buffer': false,
    }
  },
  output: {
    filename: '[name].js', // 入口代码块文件名称生成规则
    chunkFilename: '[name].js', // 非入口代码块文件名称生成规则
  },
  cache: {
    // 不使用cnpm安装
    type: 'filesystem', // memory（内存存储） filesystem(硬盘存储，持久化)
    // cacheDirectionary: path.resolve(__dirname, 'node_modules/.cache/webpack'),
  },
  devServer: {
    port: 8080,
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
        test: '/\.png$/',
        type: 'assets/resource', // 对标file-loader
      },
      {
        test: '/\.ico$/',
        type: 'assets/inline', // 对标url-loader 模块大小<limit base64字符串
      },
      {
        test: '/\.txt$/',
        type: 'assets/source', // 对标raw-loader
      },
      {
        test: '/\.jpg$/',
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