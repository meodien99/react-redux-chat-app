import React, { Component } from 'react';

export default class UsersList extends Component {
    render() {
        var users = this.props.users.map(function (user, i) {
            return <div className="chat-user" key={i}>{user.username} ,</div>;
        });
        return (
            <div className="users-list col-xs-3">
            Users :
               {users}
            </div>
        );
    }
}