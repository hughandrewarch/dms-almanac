import { RECEIVE_TOWN, RECEIVE_TOWN_LIST } from "../constants"

const initialState = {
  towns: [],
  townPage: {
    town: {},
    spotList: [],
    personList: []
  }
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TOWN_LIST:
      return Object.assign({}, state, {
        towns: action.payload
      })
    case RECEIVE_TOWN:
      return Object.assign({}, state, {
        townPage: {
          town: action.payload.town,
          spotList: action.payload.spotList,
          personList: action.payload.personList
        }
      })
    default:
      return state
  }
}

export default rootReducer