import { types } from "../types/userTypes"

const initialState = {
    name:"",
    userName: "",
    password:""
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CHANGE_NAME:
      return { 
        ...state, 
        name: payload 
      }
    case types.CHANGE_USERNAME:
    return { 
        ...state, 
        userName: payload 
    }
    case types.CHANGE_PASSWORD:
    return { 
        ...state, 
        password: payload 
    }
    case types.RESET:
    return { 
        state : initialState
    }

  default:
    return state
  }
}
