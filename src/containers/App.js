import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as rootActionCreators from '../actions/root';
import * as roomActionCreators from '../actions/room';
import Main from '../components/Main';


const mapStateToProps = (state) => {
    return {
        ...state
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, rootActionCreators, roomActionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);