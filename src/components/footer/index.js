import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

export default class Footer extends React.Component {

    state = {
        title: '',
        rooms: [
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Pegase', image: 'Pegase.jpg' },
            { name: 'Thalie', image: 'Thalie.jpg' }
        ]
    };

    componentDidMount() {
        // console.log('didmount');
        //this.state.title = 'TOP 5';
        this.setState({ title: 'TOP 5' });
    }

    componentWillMount() {
        // console.log('wilmount');

    }

    componentWillUpdate() {
        // console.log('update');
    }

    render() {
        // console.log('render');
        return (
            <>
                <h3>{this.state.title}</h3>
                <Row>
                    {this.state.rooms.map((item, index) => (
                        <Col key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`/images/${item.image}`} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </>
        );
    }
}