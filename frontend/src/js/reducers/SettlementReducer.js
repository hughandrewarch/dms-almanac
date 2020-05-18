import { RECEIVE_SETTLEMENTS } from "../constants"
import ResponseUtil from "../utilities/ResponseUtil"
import BaseReducer from "./BaseReducer"

export default class SettlementReducer extends BaseReducer {
    initialState = {
        byId: {},
        allIds: [],
    };

    [RECEIVE_SETTLEMENTS](state, action) {
        let settlements = ResponseUtil.normalize(action.payload)
        return {
            ...state,
            byId: settlements.byId,
            allIds: settlements.allIds,
        }
    }
}
