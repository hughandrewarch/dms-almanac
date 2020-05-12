import { RECEIVE_RELATION_TYPES } from "../constants"
import BaseReducer from "./BaseReducer"

export default class RelationTypeReducer extends BaseReducer {
    initialState = {
        byId: {},
        allIds: [],
    };

    [RECEIVE_RELATION_TYPES](state, action) {
        let relationType = normalize(action.payload)
        return {
            ...state,
            byId: relationType.byId,
            allIds: relationType.allIds,
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
