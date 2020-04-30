import { FETCH_PLACE, RECEIVE_SETTLEMENTS } from "../constants"
import { getSettlements } from "../api/settlement"

export function fetchPlace(payload) {
  return { type: FETCH_PLACE, payload: payload }
}

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
