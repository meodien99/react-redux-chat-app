import 'normalize.css/normalize.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

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