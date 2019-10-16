import { FETCH_PLACE } from "../constants"

export function fetchPlace(payload) {
  return { type: FETCH_PLACE, payload: payload }
}
