'use strict';

require('dotenv').config({silent: true});

var webpack    = require('webpack');
var CopyPlugin = require('copy-webpack-plugin');

var APP = __dirname + '/app';
var DEST = process.env.NODE_ENV === 'production' ?
  __dirname + '/dist' :
  __dirname + '/build';

module.exports = {
  context: APP,
  plugins: [
    new CopyPlugin([{ from: '.' }], { ignore:
      [
        'js/**/*'
      ]
    })
  ],
  entry: { app: './js/client.js' },
  output: {
    path: DEST,
    filename: 'bundle.js'
  },
  watch: true
};
