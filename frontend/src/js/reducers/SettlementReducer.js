import { RECEIVE_SETTLEMENTS } from "../constants"
import BaseReducer from "./BaseReducer"

export default class SettlementReducer extends BaseReducer {
    initialState = {
        byId: {},
        allIds: [],
    };

    [RECEIVE_SETTLEMENTS](state, action) {
        let settlements = normalize(action.payload)
        return {
            ...state,
            byId: settlements.byId,
            allIds: settlements.allIds,
        }
    }
}

function normalize(list) {

    var ids = list.map(item => {
        return item.id
    })

    var values = list.reduce(function(map, item) {
        map[item.id] = {id: item.id, name: item.name}
        return map
    }, {})

    return {
        byId: values,
        allIds: ids
    }
}
