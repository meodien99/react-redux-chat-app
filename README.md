# react-es6-boilerplate
An es6 boilerplate including what's need to get HTML coverage reports working when using [Babel](https://babeljs.io/),  [Karma](http://karma-runner.github.io/), [Mocha](https://mochajs.org/), and [Istanbul](https://github.com/gotwarlost/istanbul) to run tests ES6 syntax.


# Core structure
The main structure you will work looks like:
```
--src/
  |--actions/
  |--components/
  |--config/
  |--reducers/ 
  |--sources/ (All images you need to be held here.)
  |--stores/ (This folder holds all your data sources)
  |--styles/ (Holds all your stylesheets)
  |--app.js
  |--index.html
 --tests/
```
* actions/
This folder will hold all of all **redux** actions.
We can include actions into your components or stores like this:
```javascript
export const TEST_ACTION = 'TEST_ACTION';

export function testAction(text){
    return {
        type: TEST_ACTION,
        text
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

* components/
This folder will hold all of all your components.
Which only includes elements to display, not container or represent to redux provider

```
import React, { Component } from 'react';

export default class ChildComponent extends Component {
  render() {
    const {text} = this.props;
    return (
      <div className="app">
        <p>{text}</p>
        <div>Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}
```

* containers/
Used in the same purpose as *components* but it includes elements which are wrapper and provider between react
and redux

```
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './Main';
import configureStore from '../stores';

const store = configureStore();

export default class RootContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}
```

* stores/
Since *redux* are singleton store in an application, this folder to hold only index.js file
```
const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            ),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ),
    );
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
