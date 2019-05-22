import { RECEIVE_TOWN, RECEIVE_TOWN_LIST } from "../constants"

const initialState = {
  towns: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    //TODO rename towns and town to something like townList and town (linked to constants note)
    case RECEIVE_TOWN_LIST:
      return Object.assign({}, state, {
        towns: state.towns.concat(action.payload)
      })
    case RECEIVE_TOWN:
      return Object.assign({}, state, {
        town: action.payload
      })
    default:
      return state
  }
}

export default rootReducer