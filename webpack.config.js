module.exports = {
  entry: './src/app/index.js',
  output: {
    path: __dirname + '/src/public',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
        },
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
    ],
  },
};
