import { FETCH_PLACE, RECEIVE_SETTLEMENTS, RECEIVE_PEOPLE, RECEIVE_RELATIONS, RECEIVE_RELATION_TYPES } from "../constants"
import SettlementApi from "../api/SettlementApi"
import PersonApi from "../api/PersonApi"
import RelationTypeApi from "../api/RelationTypeApi"
import RelationApi from "../api/RelationApi"

export function fetchPlace(payload) {
  return { type: FETCH_PLACE, payload: payload }
}

export default class Actions {
//TODO keep moving, look at actionUtility to bring out lines 41-45 httputility effect utility
    static fetchSettlements() {
        return async (dispatch, getState) => {
            return SettlementApi.getAll()
                .then((data) => {
                    dispatch(Actions.receiveSettlements(data))
                })
                .catch(console.log)
        }
    }

    static receiveSettlements(payload) {
      return  { type: RECEIVE_SETTLEMENTS, payload: payload }
    }

    static fetchPeople() {
        return async (dispatch, getState) => {
            return PersonApi.getAll()
                .then((data) => {
                    dispatch(Actions.receivePeople(data))
                })
                .catch(console.log)
        }
    }

    static receivePeople(payload) {
      return  { type: RECEIVE_PEOPLE, payload: payload }
    }

    static fetchRelations() {
        return async (dispatch, getState) => {
            return RelationApi.getAll()
                .then((data) => {
                    dispatch(Actions.receiveRelations(data))
                })
                .catch(console.log)
        }
    }

    static receiveRelations(payload) {
      return  { type: RECEIVE_RELATIONS, payload: payload }
    }

    static fetchRelationTypes() {
        return async (dispatch, getState) => {
            return RelationTypeApi.getAll()
                .then((data) => {
                    dispatch(Actions.receiveRelationTypes(data))
                })
                .catch(console.log)
        }
    }

    static receiveRelationTypes(payload) {
      return  { type: RECEIVE_RELATION_TYPES, payload: payload }
    }
}
