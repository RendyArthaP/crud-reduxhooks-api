import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import handleTodos from './reducers/Todo.reducer';

export default createStore(handleTodos, applyMiddleware(thunk))