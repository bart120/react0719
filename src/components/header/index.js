import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../redux/actions/authentication';
import { withRouter } from 'react-router';

class Header extends React.Component {

    onLogout = (event) => {
        this.props.actions.logout();
        sessionStorage.removeItem('USER');
        this.props.history.push('/');
    }

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
                    {this.props.isConnectedProp ? (
                        <>
                            <Navbar.Text>
                                Bonjour {this.props.user.login}
                            </Navbar.Text>
                            <Button onClick={this.onLogout}>Se déconnecter</Button>
                        </>
                    ) : (
                            <Link to="/login">Se connecter</Link>
                        )}


                </Navbar.Collapse>
            </Navbar >
        );
    }



}

const mapStateToProps = stateStore => ({
    isConnectedProp: stateStore.isConnected,
    user: stateStore.user
});

const mapDispatchToProps = dispatch => ({
    actions: {
        logout: bindActionCreators(logout, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))