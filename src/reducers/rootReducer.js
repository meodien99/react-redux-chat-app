/*eslint no-console:0 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { _isAuthen } from './authen';
import { rooms } from './rooms';

const rootReducer = combineReducers({
    _isAuthen,
    rooms,
    routing: routerReducer
});

export default rootReducer;