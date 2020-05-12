import { RECEIVE_RELATIONS } from "../constants"
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

    static receiveRelations(payload) {
      return  { type: RECEIVE_RELATIONS, payload: payload }
    }
}
