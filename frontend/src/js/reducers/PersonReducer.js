import { RECEIVE_PEOPLE } from "../constants"
import BaseReducer from "./BaseReducer"

export default class PersonReducer extends BaseReducer {
    initialState = {
        byId: {},
        allIds: [],
    };

    [RECEIVE_PEOPLE](state, action) {
        let people = normalize(action.payload)
        return {
            ...state,
            byId: people.byId,
            allIds: people.allIds,
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
