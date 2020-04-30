import { FETCH_PLACE, RECEIVE_SETTLEMENTS, RECEIVE_PEOPLE, RECEIVE_RELATIONS, RECEIVE_RELATION_TYPES } from "../constants"
import { getSettlements } from "../api/settlement"
import { getPeople } from "../api/person"
import { getRelations } from "../api/relation"
import { getRelationTypes } from "../api/relation_type"

export function fetchPlace(payload) {
  return { type: FETCH_PLACE, payload: payload }
}

//TODO break into own api structures?
//TODO reread action dispatch, might be skipping a step, see fetchPlace
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

export function fetchPeople(payload) {
  return (dispatch) => {
    return getPeople()
      .then((data) => {
        dispatch(receivePeople(data))
      })
      .catch(console.log)
  }
}

function receivePeople(payload) {
  return  { type: RECEIVE_PEOPLE, payload: payload }
}

export function fetchRelations(payload) {
  return (dispatch) => {
    return getRelations()
      .then((data) => {
        dispatch(receiveRelations(data))
      })
      .catch(console.log)
  }
}

function receiveRelations(payload) {
  return  { type: RECEIVE_RELATIONS, payload: payload }
}

export function fetchRelationTypes(payload) {
  return (dispatch) => {
    return getRelationTypes()
      .then((data) => {
        dispatch(receiveRelationTypes(data))
      })
      .catch(console.log)
  }
}

function receiveRelationTypes(payload) {
  return  { type: RECEIVE_RELATION_TYPES, payload: payload }
}
