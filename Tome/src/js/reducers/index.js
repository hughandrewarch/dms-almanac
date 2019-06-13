import { RECEIVE_PERSON, RECEIVE_SETTLEMENT, RECEIVE_SETTLEMENT_LIST } from "../constants"

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

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SETTLEMENT_LIST:
      return Object.assign({}, state, {
        settlements: action.payload
      })
    case RECEIVE_SETTLEMENT:
      return Object.assign({}, state, {
        settlementPage: {
          settlement: action.payload.settlement,
          placeList: action.payload.placeList,
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