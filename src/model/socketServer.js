/*eslint no-console:0*/
var _ = require('lodash-node');

var Socket = function (io) {
    // var allClients = [];
    // allClients.push(socket);
    var chatRooms = [];
    io.on('connection', function (socket) {
        console.log('connecting ....');
        // user load rooms list
        var handleLoadRooms = function () {
            console.log('client:load_room....');
            console.log(chatRooms);
            socket.emit('server:loaded_room', chatRooms);
        };

        // create new room
        var handleCreateRoom = function (room) {
            console.log('client:create_room....');
            // console.log(chatRooms);
            // console.log(room);
            // console.log(!_.some(chatRooms, room))
            if (!_.some(chatRooms, room)) {
                // create users list of this room
                // room.users = [];

                // push to rooms list
                chatRooms.push(room);

                // join this room
                socket.join(room.id);

                // broadcast emit to all connected client on server
                socket.emit('server:new_created_room', chatRooms);
                io.sockets.emit('server:loaded_room', chatRooms);
                console.log('server:new_created_room....');
            }
        };

        // user join this room
        var handleUserJoin = function (room, user) {
            console.log('client:user_join_room....');

            // update users list
            chatRooms.forEach(function (r) {
                if (r.id == room.id) {
                    if (!_.some(r.users, user)) {
                        socket.join(room.id);
                        r.users.push(user);
                        // emit to all user in client
                        io.sockets.emit('server:user_joined_to_room', r);
                        console.log('server:user_joined_to_room....');
                    }
                }
            });
        };

        // user send message
        var handleSendMessage = function (room, user, message) {
            console.log('client:send_message....');

            // broadcast to all users in room
            var object = { author: user, content: message };
            console.log('---message---');
            console.log(object);
            // io.sockets.in(room.id).emit('server:message_sent', object);
            socket.broadcast.to(room.id).emit('server:message_sent', object);

            console.log('server:message_sent....');
        };

        var handleQuitRoom = function (room, user) {
            console.log('client:handleQuitRoom....');

            if (room === undefined || user === undefined) {
                // user've just load rooms list, but didn't join to room
                console.log('quited.')
            } else {

                chatRooms.forEach(function (r, i) {
                    if (r.id == room.id) {
                        // if user joined room
                        if (_.some(r.users, user)) {
                            var index = _.findIndex(r.users, function (u) {
                                return u.id === user.id;
                            });
                            
                            if (index !== -1) {
                                console.log('find an user will quit');

                                r.users.splice(index, 1);
                                // if room is still have users
                                if (r.users.length > 0) {
                                    console.log('room is still have user');
                                    console.log(r.users);
                                    // and he is a room auth
                                    if (user.id === room.hostId) {
                                        // change hostId to the first remain user
                                        r.hostId = r.users[0].id;
                                    }
                                } else {
                                    console.log('empty room');
                                    console.log(r.users);
                                    // empty room, remove it
                                    chatRooms.splice(i, 1);
                                }
                                socket.leave(r.id);
                            }

                            // emit to all connected client
                            socket.emit('server:user_quited_room');
                            console.log(chatRooms);
                            io.sockets.emit('server:loaded_room', chatRooms);
                            console.log('server:user_quited_room....');
                        }
                    }
                });
            }
        };


        socket.on('client:load_room', handleLoadRooms);

        socket.on('client:create_room', handleCreateRoom);

        socket.on('client:user_join_room', handleUserJoin);

        socket.on('client:send_message', handleSendMessage);

        // user quit room
        socket.on('client:user_quit', handleQuitRoom);

        // disconnect
        socket.on('disconnect', handleQuitRoom);
    })
};

module.exports = Socket;