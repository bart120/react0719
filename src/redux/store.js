import { createStore } from 'redux';
import AuthReducer from './reducers/authentication';

export const store = createStore(AuthReducer);