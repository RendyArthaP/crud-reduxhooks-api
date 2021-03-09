import { createStore } from 'redux'
import handleUsers from './reducers/User.reducers';

export default createStore(handleUsers)