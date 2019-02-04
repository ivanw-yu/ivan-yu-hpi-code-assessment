module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', {targets: {browsers: ['last 2 versions']}}]
          ],
        }
      }
    ]
  }
}
