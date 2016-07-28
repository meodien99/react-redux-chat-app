/**
 * return rooms state
 */
import { ROOMS_LIST, CREATE_ROOM, USER_JOIN_ROOM } from '../config/core';
import _ from 'underscore';

export function rooms(state = [], action) {
    switch (action.type) {
        case ROOMS_LIST:
            return action.rooms;
        case CREATE_ROOM:
            return [
                ...state,
                action.room
            ];
        case USER_JOIN_ROOM:
            var rooms = [...state];
            rooms.forEach((room) => {
                if(room.id === action.room.id) {
                    room.users = [...action.room.users]
                }
            });
            
            return rooms;
        default:
            return state;
    }
}