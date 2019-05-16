import { FETCH_TOWNS } from "../constants"
import { receiveTowns } from "../actions"

export function pageMiddleware({ dispatch }) {
  return function(next){
    return function(action){
      switch (action.type) {
        case FETCH_TOWNS:
          console.log('here');
          let payload =  ['Hughan', 'Amberlea', 'Ironport']
          return dispatch(receiveTowns(payload));
        default:
      }
      return next(action)
    }
  }
}