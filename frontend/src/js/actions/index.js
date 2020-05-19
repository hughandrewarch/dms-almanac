import { FETCH_PLACE, REQUEST } from "../constants"

export function fetchPlace(payload) {
  return { type: FETCH_PLACE, payload: payload }
}

//TODO keep moving, look at actionUtility
//TODO move fetchs into a reducer, actions should be pure, like place
export default class Actions {

    static request() {
        return  { type: REQUEST }
    }
}
