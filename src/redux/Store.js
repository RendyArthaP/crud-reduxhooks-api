import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import handleUsers from './reducers/User.reducers';

export default createStore(handleUsers, applyMiddleware(thunk))