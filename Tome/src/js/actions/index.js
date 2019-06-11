import {
  FETCH_PERSON,
  FETCH_SPOT,
  FETCH_TOWN,
  FETCH_TOWN_LIST,
  RECEIVE_PERSON,
  RECEIVE_TOWN,
  RECEIVE_TOWN_LIST
} from "../constants"

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

export function fetchSpot(payload) {
  return { type: FETCH_SPOT, payload: payload }
}

export function fetchPerson(payload) {
  return { type: FETCH_PERSON, payload: payload }
}

export function receivePerson(payload) {
  return { type: RECEIVE_PERSON, payload: payload }
}
