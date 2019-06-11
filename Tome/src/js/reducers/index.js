import { RECEIVE_PERSON, RECEIVE_TOWN, RECEIVE_TOWN_LIST } from "../constants"

const initialState = {
  towns: [],
  townPage: {
    town: {},
    spotList: [],
    personList: []
  },
  personPage: {
    person: {}
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