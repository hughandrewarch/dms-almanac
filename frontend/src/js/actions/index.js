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
  return (dispatch) => {
    const settlementId = parseInt(payload)

    return fetch('http://localhost:8080/settlement/' + settlementId)
      .then(res => res.json())
      .then((data) => {
        dispatch(receiveSettlement(data))
      })
      .catch(console.log)
  }
}

export function fetchSettlementList() {
  return (dispatch) => {
    return fetch('http://localhost:8080/settlements')
      .then(res => res.json())
      .then((data) => {
        dispatch(receiveSettlementList(data))
      })
      .catch(console.log)
  }
}

export function receiveSettlement(payload) {
  return  { type: RECEIVE_SETTLEMENT, payload: payload }
}

export function receiveSettlementList(payload) {
  return  { type: RECEIVE_SETTLEMENT_LIST, payload: payload }
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
  return (dispatch) => {
    const personId = parseInt(payload)

    return fetch('http://localhost:8080/person/' + parseInt(personId))
      .then(res => res.json())
      .then((data) => {
        dispatch(receivePerson(data))
      })
      .catch(console.log)
  }
}

export function receivePerson(payload) {
  return { type: RECEIVE_PERSON, payload: payload }
}
