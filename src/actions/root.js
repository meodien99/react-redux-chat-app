/**
 * This file contains action functions reprenst to all app's actions
 * such as checkAuthen, login, logout
 */
import { CHECK_AUTHENTICATE, LOGIN, LOGOUT } from '../config/core';
import { _returnAction } from './index';

export const checkAuthenticate = () => {
    return _returnAction(CHECK_AUTHENTICATE, {
        
    });
};

export const login = (user) => {
    return _returnAction(LOGIN, {
        user
    });
};

export const logout = (user) => {
    return _returnAction(LOGOUT, {
        user
    });
};