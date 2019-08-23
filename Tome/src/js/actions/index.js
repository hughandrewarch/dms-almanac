import {
  FETCH_PERSON,
  FETCH_PLACE,
  FETCH_SETTLEMENT,
  FETCH_SETTLEMENT_LIST,
  RECEIVE_PERSON,
  RECEIVE_SETTLEMENT,
  RECEIVE_SETTLEMENT_LIST,
  CREATE_SETTLEMENT
} from "../constants"

export function fetchSettlement(payload) {
  return { type: FETCH_SETTLEMENT, payload: payload }
}

export function fetchSettlementList() {
  return { type: FETCH_SETTLEMENT_LIST }
}

export function receiveSettlement(payload) {
  return { type: RECEIVE_SETTLEMENT, payload: payload }
}

export function receiveSettlementList(payload) {
  return { type: RECEIVE_SETTLEMENT_LIST, payload: payload }
}

export function createSettlement(name, population, description) {
  return {
    type: CREATE_SETTLEMENT,
    payload: {
      name: name,
      population: population,
      description: description
    }
  }
}

export function fetchPlace(payload) {
  return { type: FETCH_PLACE, payload: payload }
}

export function fetchPerson(payload) {
  return { type: FETCH_PERSON, payload: payload }
}

export function receivePerson(payload) {
  return { type: RECEIVE_PERSON, payload: payload }
}
