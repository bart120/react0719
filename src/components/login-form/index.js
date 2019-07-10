import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class LoginForm extends React.Component {
    static propTypes = {
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired,
        errorMessage: PropTypes.string
    }

    state = {}



    render() {
        const { email, password, onSubmit, errorMessage } = this.props;

        /*const email = props.email;
        const password = props.password;*/

        return (
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Votre login" value={email} />
                    <Form.Text className="text-muted">
                        {errorMessage}
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Votre mot de passe" value={password} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Connexion
                </Button>
            </Form>
        );
    }
}

export default LoginForm;