import { RECEIVE_PERSON } from "../constants"

const initialState = {
  settlements: [],
  settlementPage: {
    settlement: {},
    placeList: [],
    personList: []
  },
  personPage: {
    person: {}
  }
}

//TODO combine reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PERSON:
      return Object.assign({}, state, {
        personPage: {
          person: action.payload.person,
        }
      })
    default:
      return state
  }
}

export default rootReducer