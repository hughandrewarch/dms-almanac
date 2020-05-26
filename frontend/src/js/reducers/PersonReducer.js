import { RECEIVE_PERSON, RECEIVE_PEOPLE } from "../constants"
import ResponseUtil from "../utilities/ResponseUtil"
import BaseReducer from "./BaseReducer"

export default class PersonReducer extends BaseReducer {
    initialState = {
        byId: {},
        allIds: [],
    };

    [RECEIVE_PEOPLE](state, action) {
        let people = ResponseUtil.normalize(action.payload)
        return {
            ...state,
            byId: people.byId,
            allIds: people.allIds,
        }
    };

    [RECEIVE_PERSON](state, action) {
        let person = ResponseUtil.normalize([action.payload.person])

        return {
            byId: Object.assign(state.byId, person.byId),
            allIds: state.allIds.concat(person.allIds)
        }
    }
}
