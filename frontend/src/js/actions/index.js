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

// TODO break out by object
// TODO make payloads more clear as to what they are
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
  return () => {
    return fetch('http://localhost:8080/settlement', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:
        JSON.stringify({
          'name': name,
          'population': parseInt(population),
          'description': description,
          'type': 'TOWN'
        })
    })
      .then(res => res.json())
      .catch(console.log)
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
