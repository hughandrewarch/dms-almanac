import { RECEIVE_RELATION_TYPES } from "../constants"
import ResponseUtil from "../utilities/ResponseUtil"
import BaseReducer from "./BaseReducer"

export default class RelationTypeReducer extends BaseReducer {
    initialState = {
        byId: {},
        allIds: [],
    };

    [RECEIVE_RELATION_TYPES](state, action) {
        let relationType = ResponseUtil.normalize(action.payload)
        return {
            ...state,
            byId: relationType.byId,
            allIds: relationType.allIds,
        }
    }
}
