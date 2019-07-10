import React from 'react';

import LoginForm from '../../components/login-form';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        message: ''
    }

    onSubmit = event => {
        event.preventDefault();
        this.setState({ message: 'coucou' });
    }

    render() {
        return (
            <LoginForm
                email={this.state.email}
                password={this.state.password}
                errorMessage={this.state.message}
                onSubmit={this.onSubmit} />

        );
    }
}

export default Login;