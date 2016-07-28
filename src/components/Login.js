/*eslint no-console:0 */
import React, { Component, PropTypes } from 'react';
import uuid from 'uuid4';

class Login extends Component {

    goBtnClick = (e) => {
        e.preventDefault();
        const username = this.refs.username.value;
        const { login } = this.props;
        const id = uuid();
        if (username) {
            login({
                username,
                id
            });
        }
    }

    render() {
        return (
            <div className="login-form">
                <input type="text" ref="username" required placeholder="Enter your name"/>
                <button onClick={this.goBtnClick}> GO </button>
            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;