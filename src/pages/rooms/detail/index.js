import React from 'react';
import RoomService from '../../../services/room-service';
import Card from 'react-bootstrap/Card'

class DetailRoom extends React.Component {
    serv = new RoomService();
    state = {
        room: null
    }

    componentDidMount() {
        this.serv.getRoomById(this.props.match.params.id)
            .then(data => this.setState({ room: data }));

    }

    render() {
        return (this.state.room != null ? (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`/images/${this.state.room.image}`} />
                <Card.Body>
                    <Card.Title>{this.state.room.name}</Card.Title>
                    <Card.Text>
                        {this.state.room.price} €
                    </Card.Text>
                </Card.Body>
            </Card>
        ) : (
                <></>
            ))
    }
}

export default DetailRoom;