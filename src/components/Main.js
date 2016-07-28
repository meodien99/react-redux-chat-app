import React, { Component } from 'react';


export default class Main extends Component {
    
    componentWillMount() {
        const { checkAuthenticate } = this.props;
        checkAuthenticate();
    }
    
    render() {
        return (
            <div>
            {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}