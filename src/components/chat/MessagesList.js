import React, { Component } from 'react';
import ChatMessage from './ChatMessage';

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    addMessage = (message) => {
        var messages = this.state.messages,
            container = this.refs.messageContainer;
        messages.push(message);

        this.setState({ messages });
        // Smart scrolling when the user is crolled
        // a little we don't want to return him back
        if (container.scrollHeight - (container.scrollTop + container.offsetHeight) >= 50) {
            this.scrolled = true;
        } else {
            this.scrolled = false;
        }
    }

    componentDidUpdate() {
        if (this.scrolled) {
            return;
        }
        var container = this.refs.messageContainer;
        container.scrollTop = container.scrollHeight;
    }

    render() {
        let messages;
        messages = this.state.messages.map((m, i) => {
            return (
                <ChatMessage message={m} key={i} />
            )
        });
        if (!messages.length) {
            messages = <div className="chat-no-messages">No messages here</div>
        }
        return (
            <div className="chat-messages col-xs-9" ref="messageContainer">
                {messages}
            </div>
        );
    }
}