import { AUTH_LOGIN, AUTH_LOGOUT } from '../actions/authentication';

const INITIAL_STATE = {
    isConnected: sessionStorage.getItem('USER') != null,
    user: sessionStorage.getItem('USER')
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                isConnected: true,
                user: action.payload
            };

        case AUTH_LOGOUT:
            return {
                isConnected: false,
                user: null
            };
        default: return state;
    }
};