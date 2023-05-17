import { types } from "../types/counterTypes"

const initialState = {
    counter: 0
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
    case types.SUMAR_NUM :
        return { 
            ...state, 
            counter : state.counter + payload 
        }

  default:
    return state
  }
}
