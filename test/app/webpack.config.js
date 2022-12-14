const path = require('path')

module.exports = (_env, argv) => ({
  entry: './app.ts',
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  optimization: {
    // Display stack trace when SSR test fail
    minimize: argv.mode === 'development',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
})
