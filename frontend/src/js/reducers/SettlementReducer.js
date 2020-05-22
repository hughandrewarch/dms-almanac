import { RECEIVE_SETTLEMENT, RECEIVE_SETTLEMENTS } from "js/constants"
import ResponseUtil from "js/utilities/ResponseUtil"
import BaseReducer from "js/reducers/BaseReducer"

export default class SettlementReducer extends BaseReducer {
    initialState = {
        byId: {},
        allIds: [],
    };

    [RECEIVE_SETTLEMENTS](state, action) {
        let settlements = ResponseUtil.normalize(action.payload)
        return {
            byId: settlements.byId,
            allIds: settlements.allIds,
        }
    };

    [RECEIVE_SETTLEMENT](state, action) {
        let settlement = ResponseUtil.normalize([action.payload.settlement])

        return {
            byId: Object.assign(state.byId, settlement.byId),
            allIds: state.allIds.concat(settlement.allIds)
        }
    }
}
