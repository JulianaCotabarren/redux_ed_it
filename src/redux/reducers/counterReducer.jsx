import { types } from "../types/counterTypes"

const initialState = {
    counter: 3
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SUMAR :
        return { 
            ...state, 
            counter : state.counter + 1 
        }
    case types.RESTAR :
        return { 
            ...state, 
            counter : state.counter - 1 
        }
    case types.RESET :
        return { 
            ...state, 
            counter : 0 
        }

  default:
    return state
  }
}
