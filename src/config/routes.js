import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/home';
import CreateRoom from '../pages/rooms/create';
import ListRoom from '../pages/rooms/list';
import Login from '../pages/login';


export default class Routes extends React.Component {

    render() {
        return (
            <>
                <Route path='/' exact component={Home} />
                <Route path='/rooms/create' component={CreateRoom} />
                <Route path='/rooms' exact component={ListRoom} />
                <Route path='/login' exact component={Login} />

            </>
        );
    }
}

