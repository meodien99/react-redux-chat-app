# es6-boilerplate
An es6 boilerplate including what's need to get HTML coverage reports working when using [Babel](https://babeljs.io/), [JSPM](http://jspm.io/), [Karma](http://karma-runner.github.io/), [Jasmine](http://jasmine.github.io/), and [Istanbul](https://github.com/gotwarlost/istanbul) to run tests in ES6 syntax. [Webpack](https://webpack.github.io/) is also used to.

# To Install And Run:

```
$ npm install -g jspm karma-cli
$ npm install
// Testing
$ karma start karma.conf.js
$ open coverage/phantomjs/index.html
// Building
$ webpack
```
Or use `npm` scripts:
```
"scripts": {
    "build": "webpack --progress",
    "test": "karma start"
  },
```
