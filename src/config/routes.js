import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Home from '../pages/home';
import CreateRoom from '../pages/rooms/create';
import ListRoom from '../pages/rooms/list';
import Login from '../pages/login';
import PrivateRoute from '../utils/private-route';


class Routes extends React.Component {

    render() {
        // console.log(this.props.isConnectedProp);
        return (
            <>
                <Route path='/' exact component={Home} />

                <PrivateRoute path='/rooms/create' component={CreateRoom} />




                <Route path='/rooms' exact component={ListRoom} />
                <Route path='/login' exact component={Login} />

            </>
        );
    }
}

const mapStateToProps = stateStore => ({
    isConnectedProp: stateStore.isConnected
});


export default connect(mapStateToProps)(withRouter(Routes))