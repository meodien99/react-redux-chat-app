'use strict';
var config = require('../../confs/default').port;

export const CHECK_AUTHENTICATE = 'CHECK_AUTHENTICATE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const ROOMS_LIST = 'ROOMS_LIST';
export const CREATE_ROOM = 'CREATE_ROOM';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const USER_JOIN_ROOM = 'USER_JOIN_ROOM';

export default {
    'ACTIONS': {
        CHECK_AUTHENTICATE,
        LOGIN,
        LOGOUT,
        ROOMS_LIST,
        CREATE_ROOM,
        SEND_MESSAGE,
        USER_JOIN_ROOM
    },
    'SWS': 'http://localhost:' + config
}
