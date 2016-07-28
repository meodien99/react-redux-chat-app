/**
 * authentication, login, logout reducers
 * @return _isAuthen state
 */
import { CHECK_AUTHENTICATE, LOGIN, LOGOUT } from '../config/core';

export function _isAuthen(state={}, action) {
    var _isAuthen = false;
    switch (action.type) {
        case CHECK_AUTHENTICATE:
        	var user = null;
            
            if( JSON.parse(localStorage.getItem('user')) !== null){
                _isAuthen = true;
                user = JSON.parse(localStorage.getItem('user'));
            }

            return Object.assign({}, state, {
                _isAuthen,
                user
            });
        case LOGIN:
            _isAuthen = true;
            var user = action.user;
            if(JSON.parse(localStorage.getItem('user')) !== user) {
                localStorage.setItem('user', JSON.stringify(user));
            }

            return Object.assign({}, state, {
                _isAuthen,
                user
            });
        case LOGOUT:
            _isAuthen = false;
            var user = action.user;

            if(JSON.parse(localStorage.getItem('user')) === action.user) {
                localStorage.removeItem('user');
            }
            
            return Object.assign({}, state, {
                _isAuthen,
                user
            });
        default:
            return state;
    }
}

 
