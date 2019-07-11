import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../pages/home';
import CreateRoom from '../pages/rooms/create';
import ListRoom from '../pages/rooms/list';
import Login from '../pages/login';


class Routes extends React.Component {

    render() {
        console.log(this.props.isConnectedProp);
        return (
            <>
                <Route path='/' exact component={Home} />


                <Route path='/rooms/create' render={() => this.props.isConnectedProp === true ? (<CreateRoom />) : (<Redirect to={{ pathname: '/login' }} />)} />


                <Route path='/rooms' exact component={ListRoom} />
                <Route path='/login' exact component={Login} />

            </>
        );
    }
}

const mapStateToProps = stateStore => ({
    isConnectedProp: stateStore.isConnected
});


export default connect(mapStateToProps)(Routes)