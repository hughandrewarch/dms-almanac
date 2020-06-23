import { RECEIVE_RELATION, RECEIVE_RELATIONS } from "../constants"
import RelationApi from "../api/RelationApi"
import Actions from "./"

export default class RelationActions {

    static fetchRelations() {
        return async (dispatch, getState) => {
            dispatch(Actions.request())
            return RelationApi.getAll()
                .then((data) => {
                    dispatch(RelationActions.receiveRelations(data))
                })
                .catch(console.log)
        }
    }

    static createRelation(left, right, relationType) {
        return async (dispatch) => {
            return RelationApi.createRelation(left, right, relationType)
                .then((data) => {
                    dispatch(RelationActions.receiveRelation(data))
                })
                .catch(console.log)

        }
    }

    static receiveRelation(payload) {
      return  { type: RECEIVE_RELATION, payload: payload }
    }

    static receiveRelations(payload) {
      return  { type: RECEIVE_RELATIONS, payload: payload }
    }
}
