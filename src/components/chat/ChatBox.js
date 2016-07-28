import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import UsersList from './UsersList';
import InputMessage from './InputMessage';
import MessagesList from './MessagesList';

export default class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.socket = this.props.route.socket;
        this.state = {
            messages: [],
            users: []
        };
        let s = this.socket.getInstance();

        s.on('server:message_sent', (message) => {
            console.debug('server:message_sent');
            this.addMessage(message);
        });

        s.on('server:user_quited_room', () => {
            console.debug('server:user_quited_room');
            this.__redirect();
        });

        // window.onbeforeunload = (e) => {
        //     var e = e || window.event;
        //     var msg = "Do you really want to leave this page?"
        //     // For IE and Firefox
        //     console.debug('onbeforeunload')

        //     if (e) {
        //         e.returnValue = msg;
        //     }

        //     // For Safari / chrome
        //     return msg;
        // };

        // window.onpopstate = (e) => {
        //     var state = e.state;
        //     if (state !== null) {
        //         this.test()
        //     }
        // };
    }
    quit = () => {
        const { _isAuthen, rooms, params } = this.props;
        const { user } = _isAuthen;
        var { roomId } = params;
        const room = rooms.find((element) => {
            return element.id === roomId
        });
        console.debug(room);
        if (!room) { // in case server is lag and room doesnt exist but user is still in this page.
            console.debug('quit room ngu')
            this.__redirect();
        } else {
            console.debug('quit room k ngu')
            this.socket.quitRoom(room, user);
        }
    }
    __redirect = () => {
        browserHistory.push('/');
    }

    componentWillMount() {
        const { _isAuthen, rooms, params } = this.props;
        if (_isAuthen._isAuthen === false) {
            this.__redirect();
        }
        const { user } = _isAuthen;

        var { roomId } = params;
        const room = rooms.find((element) => {
            return element.id === roomId
        });
        this.socket.joinRoom(room, user);
    }

    handlerSendMessage = (message) => {
        const { user } = this.props._isAuthen;
        const room = this.props.rooms.find((room) => {
            return room.id === this.props.params.roomId;
        });
        message = this.refs.messageInput.state.message;
        this.addMessage({
            content: message,
            author: user
        });
        this.socket.sendMessage(room, user, message);
    }
    componentDidMount() {
        console.debug(this.refs.messagesList);
    }
    
    addMessage = (message) => {
        if (message) {
            message.date = new Date();
            console.debug(this.refs.messagesList);
            this.refs.messagesList.addMessage(message);
        }
    }

    render() {
        const { users } = this.props.rooms.find((room) => {
            return room.id === this.props.params.roomId;
        });
        return (
            <div className="chat-box" ref="root">
                <div className="chat-header ui-widget-header">React p2p chat <button onClick={this.quit}>quit</button></div>
                <div className="chat-content-wrapper row">
                    <MessagesList ref="messagesList"></MessagesList>
                    <UsersList users={users} ref="usersList"></UsersList>
                </div>
                <InputMessage
                    ref="messageInput"
                    handlerSendMessage={this.handlerSendMessage}
                    ></InputMessage>
            </div>
        );
    }
}