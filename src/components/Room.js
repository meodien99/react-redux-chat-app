import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.socket = this.props.route.socket;
    }

    render() {
        const {room} = this.props;
        const amount = room.users.length;
        return (
            <div className="room">
                <div className="room__name"><span>{room.name}</span></div>
                <div className="room__join">
                    <Link to={`/chatbox/${room.id}`} className="joinbtn">Join</Link>
                </div>
                <div className="room__user"><span>Users: {room.amount}</span></div>
            </div>
        );
    }
}