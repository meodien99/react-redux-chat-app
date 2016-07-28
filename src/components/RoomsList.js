import React, { Component } from 'react';
import Room from './Room';
import CreateRoom from './CreateRoom';
import uuid from 'uuid4';
import { browserHistory } from 'react-router';

class RoomsList extends Component {
    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };
        this.socket = this.props.route.socket;
    }

    componentWillMount() {
        // const { getRooms } = this.props;
        // user load rooms list
        this.socket.loadRooms();
    }

    openModal = () => {
        this.setState({ isModalOpen: true });
    }

    closeModal = () => {
        this.setState({ isModalOpen: false });
    }

    createRoomSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = uuid();
        const { user } = this.props._isAuthen;
        var room = {
            name: this.refs.roomName.value,
            password: this.refs.roomPassword.value === '' ? null : this.refs.roomPassword.value,
            id,
            hostId: user.id,
            users: []
        };
        this.socket.createRoom(room);
        this.refs.roomForm.reset();
        this.closeModal();

        // join room automatically
        console.debug('redirecting to chatbox')
        browserHistory.push(`/chatbox/${id}`);
    }

    render() {
        const { rooms } = this.props;
        return (
            <div className="rooms-list">
                <button onClick={this.openModal}>+</button>
                <CreateRoom isOpen={this.state.isModalOpen} onClose={this.closeModal}>
                 
                            <form className="create-form" ref="roomForm" onSubmit={this.createRoomSubmit}>
                                <input type="text" ref="roomName" placeholder="Room Name" required/>
                                <input type="password" ref="roomPassword" placeholder="Room Password"/>
                                <input type="submit" value="Create"/>
                            </form>
                    
                </CreateRoom>
                <div className="rooms">
                    {rooms.map((room, i) =>
                        <Room key={i} room={room} {...this.props} className="room"/>
                    ) }
                </div>
            </div>
        );
    }
}

export default RoomsList;