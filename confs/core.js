'use strict';
let path = require('path');
let defaultSettings = require('./default');

// Additional npm or bower modules (or plugins) to include in builds
// @ex:
// let npmPath = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
let additionalPaths = [];

let CONFIG = {
   additionalPaths: additionalPaths,
   port: defaultSettings.port,
   debug: true,
   devtool: 'eval',
   output: {
      path: path.join(__dirname, '/../dist/assets'),
      filename: 'app.js',
      publicPath: defaultSettings.publicPath
   },
   devServer: {
      contentBase: './src/',
      historyApiFallback: true,
      hot: true,
      port: defaultSettings.port,
      publicPath: defaultSettings.publicPath,
      noInfo: false
   },
   resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {
         actions: `${defaultSettings.srcPath}/actions/`,
         components: `${defaultSettings.srcPath}/components/`,
         sources: `${defaultSettings.srcPath}/sources/`,
         stores: `${defaultSettings.srcPath}/stores/`,
         styles: `${defaultSettings.srcPath}/styles/`,
         config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV
      }
   },
   module: {}
};

module.exports = CONFIG;
