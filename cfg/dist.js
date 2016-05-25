/*
 * Copyright (c) 2011-2016 Pivotal Software Inc, All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let npmBase = path.join(__dirname, '../node_modules');
let additionalPaths = [path.join(npmBase, '@reactivex/rxjs'),
  path.join(npmBase, 'reactor-core-js'), path.join(npmBase, 'react'),
  path.join(npmBase, 'd3'), path.join(npmBase, 'normalize'),
  path.join(npmBase, 'core-js'), path.join(npmBase, 'moment'),
  path.join(npmBase, 'gridle'), path.join(npmBase, 'font-awesome')];

let config = Object.assign({}, baseConfig, {
  additionalPaths: additionalPaths,
  entry: {
    pylon : './src/main/app/index'
  },
  output: {
    filename: "./src/main/resources/public/assets/[name].js",
    chunkFilename: "./src/main/resources/public/assets/[id].js"
  },
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: defaultSettings.getDefaultModules()
});


// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '../src/main/app/') ]
  )
});

module.exports = config;
