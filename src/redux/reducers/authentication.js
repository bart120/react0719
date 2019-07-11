import { AUTH_LOGIN } from '../actions/authentication';

const INITIAL_STATE = {
    isConnected: false
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                state: { isConnected: true },
                ...action.payload
            };
        default: return state;
    }
};