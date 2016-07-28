import React, { Component } from 'react';

export default class InputMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    keyHandler = (event) => {
        const message = this.state.message.trim();
        if(event.keyCode === 13 && message.length) {
            this.props.handlerSendMessage(message);
            this.setState({message: ''});
            this.refs.input.value = '';
        }
    }
    
    linkState = () => {
        this.state.message = this.refs.input.value;
    }

    render() {
        return (
            <input type="text"
                ref="input"
                className="form-control"
                placeholder="Enter a message..."
                onChange={this.linkState}
                onKeyUp={this.keyHandler}
                />
        );
    }
}