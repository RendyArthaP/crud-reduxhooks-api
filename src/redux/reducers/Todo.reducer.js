import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,

  EDIT_TODO_REQUEST,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_ERROR,

  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,

  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR
} from '../actions/Todo.actions.js';

const initialState = { 
  data: [],
  error: null
}

const handleTodos = (state = initialState, action) => {
  switch(action.type) {
    case GET_TODO_REQUEST:
      console.log("Data request")
      return {
        ...state
      }
    case GET_TODO_SUCCESS:
      console.log("Data Success")
      return {
        ...state,
        data: action.result
      }
    case GET_TODO_ERROR:
      console.log("Data error")
      return {
        ...state,
        error: action.error
      }
    case ADD_TODO_REQUEST: 
      return state
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data,
          action.result
        ]
      }
    case ADD_TODO_ERROR:
      return {
        ...state,
        error: action.error
      }
    case DELETE_TODO_REQUEST: 
      return {
        ...state
      }
    case DELETE_TODO_SUCCESS:
      let deleteStateTodo = state.data.filter(todos => todos.id !== action.result.id);

      return {
        ...state,
        data: [...deleteStateTodo]
      };
    case DELETE_TODO_ERROR:
      return {
        ...state,
        error:action.error
      }
    case EDIT_TODO_REQUEST:
      return {
        ...state
      }
    case EDIT_TODO_SUCCESS:
      let editStateTodos = state.data.find(todos => todos.id === action.todos.id)
      editStateTodos.todos = action.todos.data
      
      return state
    case EDIT_TODO_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default handleTodos