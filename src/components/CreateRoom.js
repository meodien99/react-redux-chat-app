import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class CreateRoom extends Component {
    closeBtnClick = (e) => {
        e.preventDefault();
        const { onClose } = this.props;
        onClose();
    }

    render() {
        const { isOpen } = this.props;
        if(isOpen) {
            return (
                <ReactCSSTransitionGroup transitionName="modal-anim"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                    <div className="modal">
                    <button onClick={this.closeBtnClick} className="closeBtn">x</button>
                        {this.props.children}
                    </div>
                </ReactCSSTransitionGroup>
            );
        } else {
            return <ReactCSSTransitionGroup transitionName="modal-anim"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300} />;
        }
        
    }
}