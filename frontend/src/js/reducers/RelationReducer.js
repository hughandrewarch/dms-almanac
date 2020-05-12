import { RECEIVE_RELATIONS } from "../constants"
import BaseReducer from "./BaseReducer"

export default class RelationReducer extends BaseReducer {
    initialState = {
        relations: [],
    };

    [RECEIVE_RELATIONS](state, action) {
        let relations = (action.payload)
        return {
            ...state,
            relations
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
