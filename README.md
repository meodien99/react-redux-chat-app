# react-es6-boilerplate
An es6 boilerplate including what's need to get HTML coverage reports working when using [Babel](https://babeljs.io/),  [Karma](http://karma-runner.github.io/), [Mocha](https://mochajs.org/), and [Istanbul](https://github.com/gotwarlost/istanbul) to run tests ES6 syntax.


# Core structure
The main structure you will work looks like:
```
--src/
  |--actions/
  |--components/
  |--config/
  |--images/ (All images you need to be held here.)
  |--sources/
  |--stores/
  |--styles/ (Holds all your stylesheets)
  |--app.js
  |--index.html
 --tests/
```
* actions/
This folder will hold all of all **flux** actions.
We can include actions into your components or stores like this:
```javascript
let react = require('react/addons');
let DemoAction = require('actions/DemoAction');
class DemoComponent extends React.Component {
  constructor(props) {
    super(props);
    DemoAction.calledMethod();
  }
}
```
* config/
This folder holds configuration files for different environments.
Used to provide your app with different settings based on the current environment.

```javascript
let React = require('react/addons');
let config = require('configName');
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    let currentAppEnv = config.appEnv;
  }
}
```

* actions/
This folder will hold all of all **flux** actions.
We can include actions into your components or stores like this:

```javascript
let React = require('react/addons');
let DemoAction = require('actions/DemoAction');
class DemoComponent extends React.Component {
  constructor(props) {
    super(props);
    DemoAction.calledMethod();
  }
}
```

* actions/
This folder will hold all of all **flux** actions.
We can include actions into your components or stores like this:
```javascript
let React = require('react/addons');
let DemoAction = require('actions/DemoAction');
class DemoComponent extends React.Component {
  constructor(props) {
    super(props);
    DemoAction.calledMethod();
  }
}
```

* sources/
This folder will hold all of all **flux** data sources.
We can include actions into your components or stores like this:
```javascript
let React = require('react/addons');
let DemoSource = require('sources/DemoSource');
class DemoComponent extends React.Component {
  constructor(props) {
    super(props);
    DemoSource.getRemoteData();
  }
}
```

* stores/
This folder will hold all of all **flux** data stores.
We can include actions into your components or stores like this:
```javascript
let React = require('react/addons');
let DemoStore = require('sources/DemoStore');
class DemoComponent extends React.Component {
  constructor(props) {
    super(props);
    DemoStore.doSomething();
  }
}
```

* tests/
This folder holds all file represent for running test

# Usage
After cloning this repository. Simply run:
```
$ npm install
$ npm run start
```
If you had never use `npm`. [See](https://www.npmjs.com/)

Built-in command:
```
"start": "nodemon server.js --env=dev", # start server
"test": "karma start", # start testing, more details are showed in `coverage` folder
"test:watch": "karma start --autoWatch=true --singleRun=false",
"posttest": "npm run lint",
"serve": "nodemon server.js --env=dev", # start server in dev mode
"serve:dist": "nodemon server.js --env=dist",
"dist": "npm run copy & webpack --env=dist",
"lint": "eslint ./src",
"copy": "copyfiles -f ./src/index.html ./src/favicon.ico ./dist",
"clean": "rimraf dist/*"
```
I am using [nodemon](https://github.com/remy/nodemon) as watch server, feel free to change into `node` if you prefer.
