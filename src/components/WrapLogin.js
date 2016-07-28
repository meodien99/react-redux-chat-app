import React, { Component } from 'react';
import Login from './Login';
import RoomsList from './RoomsList';

export default class WrapLogin extends Component {
    constructor(props){
        super(props);
        window.onbeforeunload = null;
        // window.onpopstate = null;
    }

    render() {
        const { _isAuthen, username } = this.props._isAuthen;
        return (
            <div className="wrap-login">
                {!_isAuthen &&
                    <Login {...this.props} />
                }
                {_isAuthen &&
                    <RoomsList {...this.props} user={username}></RoomsList>
                }
            </div>
        );
    }
}