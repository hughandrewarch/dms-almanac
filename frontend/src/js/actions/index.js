import { FETCH_PLACE,
            FETCH_PEOPLE,
            FETCH_RELATIONS,
            FETCH_RELATION_TYPES,
            RECEIVE_SETTLEMENTS,
            RECEIVE_PEOPLE,
            RECEIVE_RELATIONS,
            RECEIVE_RELATION_TYPES } from "../constants"
import { getPeople } from "../api/person"
import { getRelations } from "../api/relation"
import { getRelationTypes } from "../api/relation_type"

import environment from 'environment'
import SettlementApi from "../api/SettlementApi"
import PersonApi from "../api/PersonApi"

export function fetchPlace(payload) {
  return { type: FETCH_PLACE, payload: payload }
}

//TODO keep moving, look at actionUtility to bring out lines 41-45 httputility effect utility
export function fetchSettlements() {
    return async (dispatch, getState) => {
        return SettlementApi.getAll()
            .then((data) => {
                dispatch(receiveSettlements(data))
            })
            .catch(console.log)
    }
}

function receiveSettlements(payload) {
  return  { type: RECEIVE_SETTLEMENTS, payload: payload }
}

export function fetchPeopleOld(payload) {
  return (dispatch) => {
    return getPeople()
      .then((data) => {
        dispatch(receivePeople(data))
      })
      .catch(console.log)
  }
}

export function fetchPeople() {
    return async (dispatch, getState) => {
        return PersonApi.getAll()
            .then((data) => {
                dispatch(receivePeople(data))
            })
            .catch(console.log)
    }
}

function receivePeople(payload) {
  return  { type: RECEIVE_PEOPLE, payload: payload }
}

export function fetchRelationsOld(payload) {
  return (dispatch) => {
    return getRelations()
      .then((data) => {
        dispatch(receiveRelations(data))
      })
      .catch(console.log)
  }
}

export function fetchRelations(payload) {
  return  { type: FETCH_RELATIONS, payload: payload }
}

function receiveRelations(payload) {
  return  { type: RECEIVE_RELATIONS, payload: payload }
}

export function fetchRelationTypesOld(payload) {
  return (dispatch) => {
    return getRelationTypes()
      .then((data) => {
        dispatch(receiveRelationTypes(data))
      })
      .catch(console.log)
  }
}

export function fetchRelationTypes(payload) {
  return  { type: FETCH_RELATION_TYPES, payload: payload }
}

function receiveRelationTypes(payload) {
  return  { type: RECEIVE_RELATION_TYPES, payload: payload }
}
