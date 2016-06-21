import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <div>Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
