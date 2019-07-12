import React from 'react';
import RoomService from '../../../services/room-service';
import { withRouter } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


class ListRoom extends React.Component {
    serv = new RoomService();
    state = {
        rooms: null
    }

    componentDidMount() {
        this.serv.getAll()
            .then(data => {
                this.setState({ rooms: data });
            })
            .catch(err => alert(err));
    }

    onDetail(id) {
        this.props.history.push(`/rooms/${id}`);
    }

    onDelete(id) {
        this.serv.deleteRoomByd(id)
            .then(data => {
                let array = [...this.state.rooms];
                array.splice(array.findIndex(item => item.id == id), 1);
                this.setState({ rooms: array });
                alert(`La salle ${data.name} a été supprimée.`);
            });
    }

    render() {
        return (
            this.state.rooms ? (
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Nombre de places</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.rooms.map(room => (
                            <tr key={room.id}>
                                <td>{room.name}</td>
                                <td>{room.price} €</td>
                                <td>{room.seatCount}</td>
                                <td>
                                    <Button onClick={() => this.onDetail(room.id)}>Voir</Button>
                                    <Button onClick={() => this.onDelete(room.id)}>Supprimer</Button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            ) : (<></>)
        );
    }
}

export default withRouter(ListRoom);