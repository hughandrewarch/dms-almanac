import { FETCH_TOWNS } from "../constants"
import { receiveTowns } from "../actions"

export function pageMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      switch (action.type) {
        case FETCH_TOWNS:
          //TODO use an api call to get (once i make a backend)
          return dispatch(receiveTowns(townPayload))
        default:
      }
      return next(action)
    }
  }
}

const townPayload = [
  { id: 1, name: 'Hughan' },
  { id: 2, name: 'Amberlea' },
  { id: 3, name: 'Roseport' },
  { id: 4, name: 'Elkshorn' }
]
