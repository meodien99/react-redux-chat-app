var path = require('path')
var webpack = require('webpack');
var libraryName = 'bundle';
var outputFile = libraryName + '.js';

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

var plugins = [], outputFile;

if (env === 'build') { // npm run build
   plugins.push(new UglifyJsPlugin({ minimize: true }));
   outputFile = libraryName + '.min.js';
} else {
   outputFile = libraryName + '.js';
}

var config = {
   entry: __dirname + '/src/app.js',
   devtool: 'source-map',
   output:{
      path: __dirname + '/dist',
      filename: outputFile,
      library: libraryName,
      libraryTarget: 'umd',
      umdNameDefine: true
   },
   module: {
      loaders : [
         {
            test: /(\.jsx|\.js)$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/
         },
         {
            test: /(\.jsx|\.js)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
         }
      ]
   },
   resolve: {
      root: path.resolve(__dirname, 'src'),
      extensions: ['', '.js']
   }
};

module.exports = config;
