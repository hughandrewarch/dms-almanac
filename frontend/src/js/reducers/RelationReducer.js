import { RECEIVE_RELATION, RECEIVE_RELATIONS } from "../constants"
import BaseReducer from "./BaseReducer"

export default class RelationReducer extends BaseReducer {
    initialState = [];

    [RECEIVE_RELATION](state, action) {
        if(action.payload) {
            state.push(action.payload)
        }
        return state
    }

    [RECEIVE_RELATIONS](state, action) {
        return (action.payload)
    }
}
