import { createStore } from 'redux'
import handleTodo from './reducers/Todo.reducers';

export default createStore(handleTodo)