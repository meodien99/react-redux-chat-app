import { combineReducers } from 'redux';
import { TEST_ACTION } from '../actions';

function testAction(state={}, action) {
    switch (action.type) {
        case TEST_ACTION:
            return Object.assign({}, state, {
                text: 'XXX'
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    testAction
});

export default rootReducer;