import Redux from 'redux';
import AuthReducer from './reducers/authentication';

export const store = Redux.createStore(AuthReducer);