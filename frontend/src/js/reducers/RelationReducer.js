import { RECEIVE_RELATIONS } from "../constants"
import BaseReducer from "./BaseReducer"

export default class RelationReducer extends BaseReducer {
    initialState = [];

    [RECEIVE_RELATIONS](state, action) {
        return (action.payload)
    }
}
