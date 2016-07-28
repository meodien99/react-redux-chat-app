// Dev config
'use strict';

let path = require('path');
let webpack = require('webpack');
let coreConfig = require('./core');
let defaultSettings = require('./default');

let BowerWebpackPlugin = require('bower-webpack-plugin');
let config = Object.assign({}, coreConfig, {
   entry:[
    //   'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
      'webpack/hot/only-dev-server',
      './src/app' // app.js
   ],
   cache: true,
   devtool: 'eval-source-map',
   plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
        searchResolveModulesDirectories: false
    }),
    new webpack.optimize.OccurenceOrderPlugin()
   ],
   module: defaultSettings.getDefaultModules()
});

// module loaders to defaults
config.module.loaders.push({
   test: /\.(js|jsx)$/,
   loader: 'react-hot!babel-loader',
   include: [].concat(config.additionalPaths, [path.join(__dirname, '/../src')])
});

module.exports = config;
