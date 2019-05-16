import { FETCH_TOWNS, RECEIVE_TOWNS } from "../constants"

export function fetchTowns() {
  return { type: FETCH_TOWNS }
}

export function receiveTowns(payload) {
  return { type: RECEIVE_TOWNS, payload: payload }
}
