import { FETCH_TOWN, FETCH_TOWN_LIST, RECEIVE_TOWN_LIST, RECEIVE_TOWN } from "../constants"

export function fetchTownList() {
  return { type: FETCH_TOWN_LIST }
}

export function fetchTown(payload) {
  return { type: FETCH_TOWN, payload: payload }
}

export function receiveTownList(payload) {
  return { type: RECEIVE_TOWN_LIST, payload: payload }
}

export function receiveTown(payload) {
  return { type: RECEIVE_TOWN, payload: payload }
}
