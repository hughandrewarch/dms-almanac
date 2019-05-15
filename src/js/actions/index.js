import { FETCH_TOWNS } from "../constants"

export function fetchTowns() {
  return { type: FETCH_TOWNS, payload: ['Hughan', 'Amberlea', 'Ironport'] }
}