const path = require('path');
const webpackBaseConfig = require('./webpack.base.js');

const clientConfig = {
  entry: './src/client/client.js',
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js'
  }
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
  //         ]
  //       }
  //     }
  //   ]
  // }
}

module.exports = { ...clientConfig, ...webpackBaseConfig };
