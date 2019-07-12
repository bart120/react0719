import React from 'react';
import RoomService from '../../../services/room-service';
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
                // console.log('then du comp');
                // console.log(obj);
                this.setState({ rooms: data });
            })
            .catch(err => alert(err));

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
                                <td><Button>Voir</Button></td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            ) : (<></>)
        );
    }
}

export default ListRoom;