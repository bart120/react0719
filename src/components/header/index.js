import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



export default class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Roomy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Accueil</Link></Nav.Link>
                        <Nav.Link><Link to="/rooms">Salles</Link></Nav.Link>
                        <Nav.Link><Link to="/rooms/create">Ajouter</Link></Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar >
        );
    }



}