import { RECEIVE_RELATION_TYPES } from "../constants"
import RelationTypeApi from "../api/RelationTypeApi"
import Actions from "./"

export default class RelationTypeActions {

    static fetchRelationTypes() {
        return async (dispatch, getState) => {
            dispatch(Actions.request())
            return RelationTypeApi.getAll()
                .then((data) => {
                    dispatch(RelationTypeActions.receiveRelationTypes(data))
                })
                .catch(console.log)
        }
    }

    static receiveRelationTypes(payload) {
      return  { type: RECEIVE_RELATION_TYPES, payload: payload }
    }
}
