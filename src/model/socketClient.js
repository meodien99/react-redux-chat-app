/*eslint no-console:0*/
import io from 'socket.io-client';
import config, {SWS} from '../config/core';
import * as roomActions from '../actions/room';

class Client {
    constructor(store) {
        this.socket = io.connect(SWS);
        this.store = store;
        this.connect();
    }

    connect = () => {
        this.socket.on('server:loaded_room', (rooms) => {
            console.debug('on:loaded_room')
            this.store.dispatch(roomActions.getRooms(rooms));
        });

        this.socket.on('server:new_created_room', (rooms) => {
            // update rooms
            console.debug('on:new_created_room');
            this.store.dispatch(roomActions.getRooms(rooms));
        });

        this.socket.on('server:user_joined_to_room', (room) => {
            // update rooms
            console.debug('on:user_joined_to_room')
            this.store.dispatch(roomActions.joinRoom(room));
        });
    }

    getInstance = () => {
        if(this.socket) {
            return this.socket;
        }
        return null;
    }

    loadRooms = () => {
        // user load rooms list
        this.socket.emit('client:load_room');
    }

    createRoom = (room) => {
        this.socket.emit('client:create_room', room);
        this.store.dispatch(roomActions.createRoom(room));
        // this.loadRooms();
    }

    joinRoom = (room, user) => {
        this.socket.emit('client:user_join_room', room, user);
    }

    sendMessage = (room, user, message) => {
        this.socket.emit('client:send_message', room, user, message);
    }

    quitRoom = (room, user) => {
        this.socket.emit('client:user_quit', room, user);
    }
};

export default Client;