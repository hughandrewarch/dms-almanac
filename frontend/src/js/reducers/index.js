import {RECEIVE_SETTLEMENTS} from "../constants"

//TODO consider remove reducer or save for loading icon
const initialState = {
  settlements: [],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SETTLEMENTS:
      return Object.assign({}, state, {
        settlements: action.payload
      })
    default:
      return state
  }
}

export default rootReducer