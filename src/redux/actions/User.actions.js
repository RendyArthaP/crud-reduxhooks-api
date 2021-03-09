import axios from "axios";

export const ADD_USER_REQUEST = "ADD_USER_REQUEST"
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS"
export const ADD_USER_ERROR = "ADD_USER_ERROR"

// export const EDIT_USER_REQUEST = "EDIT_USER_REQUEST"
// export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS"
// export const EDIT_USER_ERROR = "EDIT_USER_ERROR"

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST"
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS"
export const DELETE_USER_ERROR = "DELETE_USER_ERROR"

export const GET_USER_REQUEST = "GET_USER_REQUEST"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_ERROR = "GET_USER_ERROR"

export const addUserRequest = () => {
  return {
    type: ADD_USER_REQUEST,
  }
}

export const addUserSuccess = (result) => {
  return {
    type: ADD_USER_SUCCESS,
    result
  }
}

export const addUserError = (error) => {
  return {
    type: ADD_USER_ERROR,
    error
  }
}

export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  }
}

export const deleteUserSuccess = (result) => {
  return {
    type: DELETE_USER_SUCCESS,
    result
  }
}

export const deleteUserError = (error) => {
  return {
    type: DELETE_USER_ERROR,
    error
  }
}

export const getDataUserRequest = () => {
  return {
    type: GET_USER_REQUEST
  }
}

export const getDataUserSuccess = (result) => {
  return {
    type: GET_USER_SUCCESS,
    result
  }
}

export const getDataUserError = (error) => {
  return {
    type: GET_USER_ERROR,
    error
  }
}

export const getDataUser = () => {
  return function(dispatch) {
    dispatch(getDataUserRequest());

    axios
      .get("https://6023a95a6bf3e6001766b546.mockapi.io/users")
      .then((result) => dispatch(getDataUserSuccess(result.data)))
      .catch((error) => dispatch(getDataUserError(error)))
  }
}

export const addUser = (dataUser) => {
  return function(dispatch) {
    dispatch(addUserRequest());

    axios
      .get("https://6023a95a6bf3e6001766b546.mockapi.io/users", {
        users: dataUser
      })
      .then((result) => dispatch(addUserSuccess(result.data)))
      .then((error) => dispatch(addUserError(error)))
  }
}

export const deleteUser = (id) => {
  return function(dispatch) {
    dispatch(deleteUserRequest());

    axios
      .delete("https://6023a95a6bf3e6001766b546.mockapi.io/users/"+id)
      .then((result) => dispatch(deleteUserSuccess(result.data)))
      .then((error) => dispatch(deleteUserError(error)))
  }
}

