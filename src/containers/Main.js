import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { testAction } from '../actions';
import Child from '../components/Child';

class Main extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        let text = 'test';
        dispatch(testAction(text));
    }

    render() {
        return (
            <div>
                <Child text={this.props.text}/>
            </div>
        );
    }
}

Main.propTypes = {
    text: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    const {text} = state.testAction || {text: 'TEST'};

    return {
        text
    }
};

export default connect(mapStateToProps)(Main);