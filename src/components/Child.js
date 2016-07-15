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

ChildComponent.defaultProps = {
};