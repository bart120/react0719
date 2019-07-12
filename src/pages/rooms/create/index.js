import React from 'react';
import RoomService from '../../../services/room-service';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

class CreateRoom extends React.Component {

    serv = new RoomService();
    state = {
        pictures: [
            { id: 'Calliope.jpg', image: 'Calliope' },
            { id: 'Pegase.jpg', image: 'Pegase' },
            { id: 'Thalie.jpg', image: 'Thalie' },
            { id: 'Persee.jpg', image: 'Persee' }
        ],
        room: {}
    };


    onChange = (event) => {
        this.setState({ room: Object.assign(this.state.room, { [event.target.name]: event.target.value }) });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.serv.createRoom(this.state.room)
            .then(data => {
                alert(`La salle ${this.state.room.name} a été créée avec l'id ${data.id}`);
                this.props.history.push('/rooms');
            });
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} noValidate>
                <Form.Group>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" onChange={this.onChange} name="name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Prix</Form.Label>
                    <Form.Control type="curency" onChange={this.onChange} name="price" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nombre de place</Form.Label>
                    <Form.Control type="number" onChange={this.onChange} name="seatCount" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control as="select" onChange={this.onChange} name="image">
                        {this.state.pictures.map((p) =>
                            (<option key={p.id} value={p.id}>{p.image}</option>)
                        )}
                    </Form.Control>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Enregistrer
                </Button>
            </Form>
        );
    }
}

export default withRouter(CreateRoom);