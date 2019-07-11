import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

/*
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            console.log(props);
            return (
                sessionStorage.getItem('USER') != null ?
                    (
                        <Component />
                    ) : (
                        (<Redirect to={{ pathname: '/login', state: { from: props.history.location.pathname } }} />)
                    )

            )
        }}
    ></Route >
)*/

class PrivateRoute extends React.Component {


    render() {
        console.warn(this.props.isConnectedProp);
        console.log(this.props.history);
        const { component: Component, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={(props) => {
                    return (
                        sessionStorage.getItem('USER') != null ?
                            (
                                <Component />
                            ) : (
                                (<Redirect to={{ pathname: '/login', state: { from: this.props.history.location.pathname } }} />)
                            )

                    )
                }}
            ></Route >
        )
    }
}

export default withRouter(PrivateRoute);