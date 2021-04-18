const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:8081/'
  },
  devServer: {
    port: 8081
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:[
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'hostEntry.js',
      exposes: {
        './Slides': './src/Slides',
      },
      remotes: {
        remote: 'remote@http://localhost:8080/remoteEntry.js',
      },
      // shared: ['react', 'react-dom'],
    })
  ]
}