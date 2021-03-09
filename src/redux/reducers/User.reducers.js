import {
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR
} from '../actions/User.actions.js';

const initialState = {
  data: [],
  error: null
}

const handleUsers = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER_REQUEST:
      console.log("Data request")
      return {
        ...state
      }
    case GET_USER_SUCCESS:
      console.log("Data Success")
      return {
        ...state,
        data: action.result
      }
    case GET_USER_ERROR:
      console.log("Data error")
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default handleUsers