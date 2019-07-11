import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authentication';

import LoginForm from '../../components/login-form';

class Login extends React.Component {
    state = {
        email: 'toto@toto.fr',
        password: 'Toto007$',
        message: ''
    }

    checkValues = () => {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!reg.test(this.state.email)) {
            this.setState({ message: 'Email invalide' });
            return false;
        }
        const regPwd = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]){6,25}.*$/;
        if (!regPwd.test(this.state.password)) {
            this.setState({ message: 'Mot de passe invalide' });
            return false;
        }
        this.setState({ message: '' });
        return true;
    }

    onSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        // this.setState({ message: 'coucou' });
        if (this.checkValues()) {
            //appel API
            const user =
            {
                login: this.state.email,
                token: 'SFGDFSGSDHGFSJFHDBFDSGF8DSFG8DSH'
            };

            sessionStorage.setItem('USER', JSON.stringify(user));

            this.props.actions.login(user);
            this.props.history.push('/');
        }

    }

    onChange = (event) => {
        //console.log(this);
        //console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <LoginForm
                email={this.state.email}
                password={this.state.password}
                errorMessage={this.state.message}
                onSubmit={this.onSubmit}
                onChange={this.onChange} />

        );
    }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
    actions: {
        login: bindActionCreators(login, dispatch)
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);