import { FETCH_PLACE, REQUEST, RECEIVE_SETTLEMENTS, RECEIVE_PEOPLE, RECEIVE_RELATIONS, RECEIVE_RELATION_TYPES } from "../constants"
import SettlementApi from "../api/SettlementApi"
import PersonApi from "../api/PersonApi"
import RelationTypeApi from "../api/RelationTypeApi"
import RelationApi from "../api/RelationApi"

export function fetchPlace(payload) {
  return { type: FETCH_PLACE, payload: payload }
}

//TODO keep moving, look at actionUtility
//TODO move fetchs into a reducer, actions should be pure, like place
export default class Actions {

    static request() {
        return  { type: REQUEST }
    }

    static fetchSettlements(dispatch) {
        return async (dispatch, getState) => {
            dispatch(Actions.request())
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
            dispatch(Actions.request())
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
            dispatch(Actions.request())
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
            dispatch(Actions.request())
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
