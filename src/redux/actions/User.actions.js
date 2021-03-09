import axios from "axios";

export const ADD_USER = "ADD_USER"
export const EDIT_USER = "EDIT_USER"
export const DELETE_USER = "DELETE_USER"
export const GET_USER_REQUEST = "GET_USER_REQUEST"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_ERROR = "GET_USER_ERROR"

export const addUser = (Users) => {
  return {
    type: ADD_USER,
    Users
  }
}

export const editUser = () => {
  return {
    type: EDIT_USER
  }
}

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    id
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
    dispatch(getDataUserRequest);

    axios
      .get("https://6023a95a6bf3e6001766b546.mockapi.io/users")
      .then((result) => getDataUserSuccess(result.data))
      .catch((error) => getDataUserError(error))
  }
}

