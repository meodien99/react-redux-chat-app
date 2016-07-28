import { CREATE_ROOM, ROOMS_LIST, USER_JOIN_ROOM } from '../config/core';
import { _returnAction } from './index';

export function getRooms(rooms) {
    return _returnAction(ROOMS_LIST, {
        rooms
    });
}

export function createRoom(room) {
    return _returnAction(CREATE_ROOM, {
        room
    });
}

export function joinRoom(room) {
    return _returnAction(USER_JOIN_ROOM, {
        room
    });
}