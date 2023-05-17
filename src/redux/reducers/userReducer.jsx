import { types } from "../types/userTypes"

const initialState = {
    name:"Pepe",
    userName: "usuariopepe",
    password:"pepe1234"
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case types.CHANGE_NAME:
    return { 
        ...state, 
        name: "Pepa" 
    }

  default:
    return state
  }
}
