import { RECEIVE_TOWNS } from "../constants"

const initialState = {
  towns: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TOWNS:
      return Object.assign({}, state, {
        towns: state.towns.concat(action.payload)
      })
    default:
      return state
  }
}

export default rootReducer