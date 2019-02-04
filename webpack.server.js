const path = require('path');
const webpackBaseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const webpackServerConfig = {
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/")
  },
  externals: [webpackNodeExternals()]
  // ,
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       loader: 'babel-loader',
  //       options: {
  //         presets: [
  //           'react',
  //           'stage-0',
  //           ['env', {targets: {browsers: ['last 2 versions']}}]
  //         ],
  //       }
  //     }
  //   ]
  // }
}

module.exports = { ...webpackServerConfig, ...webpackBaseConfig};
