/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const http = require('http');
const Socket = require('./src/model/socketServer');
const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
// const open = require('open');

// new WebpackDevServer(webpack(config), config.devServer)
// .listen(config.port, 'localhost', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Listening at localhost:' + config.port);
//   console.log('Opening your system browser...');
//   // open('http://localhost:' + config.port);
// });

var express = require('express');
var app = express();
var server = new http.Server(app);
var io  = require('socket.io')(server);

app.use(require('webpack-dev-middleware')(webpack(config), config.devServer));

app.use(require('webpack-hot-middleware')(webpack(config)));

app.use(express.static(__dirname + '/src'));


// allow CORS
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3333');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.get('/', function(req, res) {
  //send the index.html in our public directory
  res.sendfile('index.html');
});

server.listen(config.port, 'localhost' , (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
  console.log('Opening your system browser...');
  // open('http://localhost:' + config.port);
});

new Socket(io);
