import { FETCH_TOWN, FETCH_TOWNS, RECEIVE_TOWNS, RECEIVE_TOWN } from "../constants"

export function fetchTowns() {
  return { type: FETCH_TOWNS }
}

export function fetchTown(payload) {
  return { type: FETCH_TOWN, payload: payload }
}

export function receiveTowns(payload) {
  return { type: RECEIVE_TOWNS, payload: payload }
}

export function receiveTown(payload) {
  return { type: RECEIVE_TOWN, payload: payload }
}
