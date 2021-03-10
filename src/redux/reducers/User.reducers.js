import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,

  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,

  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,

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
    case ADD_USER_REQUEST: 
      return {
        ...state
      }
    case ADD_USER_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data,
          action.result
        ]
      }
    case ADD_USER_ERROR:
      return {
        ...state,
        error: action.error
      }
    case DELETE_USER_REQUEST: 
      return {
        ...state
      }
    case DELETE_USER_SUCCESS:
      let deleteStateUser = state.data.filter(users => users.id !== action.result.id);

      return {
        ...state,
        data: [...deleteStateUser]
    };
    case DELETE_USER_ERROR:
      return {
        ...state,
        error:action.error
      }
      
    default:
      return state
  }
}

export default handleUsers