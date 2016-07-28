import 'normalize.css/normalize.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../stores';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import SocketClient from '../model/socketClient';

// import components
import App from './App';
import ChatBox from '../components/chat/ChatBox';
import WrapLogin from '../components/WrapLogin';

var initialState = {
    _isAuthen : {id: null, _isAuthen: false, username: null},
    rooms: []
};

// clear localStorage
// localStorage.clear();

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store); 

const socket = new SocketClient(store);

export default class RootContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={App} socket={socket}>
                        <IndexRoute component={WrapLogin}></IndexRoute>
                        <Route path="/chatbox/:roomId" component={ChatBox}></Route>
                        <Redirect from='*' to='/' />
                    </Route>
                </Router>
            </Provider>
        );
    }
}