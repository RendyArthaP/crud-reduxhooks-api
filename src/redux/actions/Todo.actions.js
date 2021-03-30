import axios from "axios";

export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST"
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS"
export const ADD_TODO_ERROR = "ADD_TODO_ERROR"

export const EDIT_TODO_REQUEST = "EDIT_TODO_REQUEST"
export const EDIT_TODO_SUCCESS = "EDIT_TODO_SUCCESS"
export const EDIT_TODO_ERROR = "EDIT_TODO_ERROR"

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST"
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS"
export const DELETE_TODO_ERROR = "DELETE_TODO_ERROR"

export const GET_TODO_REQUEST = "GET_TODO_REQUEST"
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS"
export const GET_TODO_ERROR = "GET_TODO_ERROR"

export const addTodoRequest = () => {
  return {
    type: ADD_TODO_REQUEST,
  }
}

export const addTodoSuccess = (result) => {
  return {
    type: ADD_TODO_SUCCESS,
    result
  }
}

export const addTodoError = (error) => {
  return {
    type: ADD_TODO_ERROR,
    error
  }
}

export const editTodoRequest = () => {
  return {
    type: EDIT_TODO_REQUEST
  }
}

export const editTodoSuccess = (result) => {
  return {
    type: EDIT_TODO_SUCCESS,
    result
  }
}

export const editTodoError = (error) => {
  return {
    type: EDIT_TODO_ERROR,
    error
  }
}

export const deleteTodoRequest = () => {
  return {
    type: DELETE_TODO_REQUEST,
  }
}

export const deleteTodoSuccess = (result) => {
  return {
    type: DELETE_TODO_SUCCESS,
    result
  }
}

export const deleteTodoError = (error) => {
  return {
    type: DELETE_TODO_ERROR,
    error
  }
}

export const getDataTodoRequest = () => {
  return {
    type: GET_TODO_REQUEST
  }
}

export const getDataTodoSuccess = (result) => {
  return {
    type: GET_TODO_SUCCESS,
    result
  }
}

export const getDataTodoError = (error) => {
  return {
    type: GET_TODO_ERROR,
    error
  }
}

export const getDataTodo = () => {
  return function(dispatch) {
    dispatch(getDataTodoRequest());

    axios
      .get("https://6023a95a6bf3e6001766b546.mockapi.io/todos")
      .then((result) => dispatch(getDataTodoSuccess(result.data)))
      .catch((error) => dispatch(getDataTodoError(error)))
  }
}

export const addTodo = (dataTodo) => {
  console.log(dataTodo)
  return function(dispatch) {
    dispatch(addTodoRequest());

    axios
      .post("https://6023a95a6bf3e6001766b546.mockapi.io/todos", {
        todo: dataTodo
      })
      .then((result) => dispatch(addTodoSuccess(result.data)))
      .catch((error) => dispatch(addTodoError(error)))
  }
}

export const editTodo = ({id, todo}) => {
  return function(dispatch) {
    dispatch(editTodoRequest())
      axios
        .put(`https://6023a95a6bf3e6001766b546.mockapi.io/todos/${id}`, {
          todo
        })
        .then((result) => dispatch(getDataTodo()))
        .catch((error) => dispatch(editTodoError(error)))
  }
}

export const deleteTodo = (id) => {
  return function(dispatch) {
    dispatch(deleteTodoRequest());

    axios
      .delete("https://6023a95a6bf3e6001766b546.mockapi.io/todos/"+id)
      .then((result) => dispatch(deleteTodoSuccess(result.data)))
      .then((error) => dispatch(deleteTodoError(error)))
  }
}

