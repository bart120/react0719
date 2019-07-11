import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



export default class Header extends React.Component {

    state = { isConnected: false };

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Roomy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">Accueil</Link>
                        <Link to="/rooms">Salles</Link>
                        <Link to="/rooms/create">Ajouter</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {this.state.isConnected ? (
                        <>
                            <Navbar.Text>
                                Bonjour toto
                            </Navbar.Text>
                            <Button>Se déconnecter</Button>
                        </>
                    ) : (
                            <Link to="/login">Se connecter</Link>
                        )}


                </Navbar.Collapse>
            </Navbar >
        );
    }



}