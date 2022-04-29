const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'detectUserDevice.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};