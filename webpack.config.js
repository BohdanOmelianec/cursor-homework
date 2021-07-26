const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    polyfill: 'babel-polyfill',
    main: './src/index.js',
    hw16: './homework-16/index.js',
    
  },
  output: {
    filename: '[name].bundle.js',
  //   // path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
};