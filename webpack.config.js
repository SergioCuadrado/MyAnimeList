//const nodeExternals = require('webpack-node-externals');
require('@babel/polyfill');
module.exports = {
  entry: ['@babel/polyfill', './src/app/index.js'],
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      path: require.resolve('path-browserify'),
      util: false,
      stream: false,
      buffer: false,
      crypto: false,
      http: false,
      timers: false,
      zlib: false,
      fs: false,
      net: false,
      tls: false,
    },
  },
  stats: {
    errorDetails: true,
  },
};
