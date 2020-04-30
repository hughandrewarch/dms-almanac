import { FETCH_PLACE, RECEIVE_SETTLEMENTS, RECEIVE_PEOPLE } from "../constants"
import { getSettlements } from "../api/settlement"
import { getPeople } from "../api/person"

export function fetchPlace(payload) {
  return { type: FETCH_PLACE, payload: payload }
}

//TODO break into own api structures?
//TODO reread action dispatch, might be skipping a step, see fetchPlace
export function fetchSettlements(payload) {
  return (dispatch) => {
    return getSettlements()
      .then((data) => {
        dispatch(receiveSettlements(data))
      })
      .catch(console.log)
  }
}

function receiveSettlements(payload) {
  return  { type: RECEIVE_SETTLEMENTS, payload: payload }
}

export function fetchPeople(payload) {
  return (dispatch) => {
    return getPeople()
      .then((data) => {
        dispatch(receivePeople(data))
      })
      .catch(console.log)
  }
}

function receivePeople(payload) {
  return  { type: RECEIVE_PEOPLE, payload: payload }
}
