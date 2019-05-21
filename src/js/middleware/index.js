import { FETCH_TOWN, FETCH_TOWNS } from "../constants"
import { receiveTown, receiveTowns } from "../actions"

export function townMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      //TODO use an api call to get (once i make a backend)
      switch (action.type) {
        case FETCH_TOWNS:
          return dispatch(receiveTowns(townList))
        case FETCH_TOWN:
          console.log('middleware', action);
          let town = allFullTowns.filter(town => town.id === action.payload)[0]
          return dispatch(receiveTown(town))
        default:
      }
      return next(action)
    }
  }
}

const townList = [
  { id: 1, name: 'Hughan' },
  { id: 2, name: 'Amberlea' },
  { id: 3, name: 'Roseport' },
  { id: 4, name: 'Elkshorn' }
]

const allFullTowns = [
  { id: 1, name: 'Hughan', population: 5000 },
  { id: 2, name: 'Amberlea', population: 1000 },
  { id: 3, name: 'Roseport', population: 800 },
  { id: 4, name: 'Elkshorn', population: 500 }
]
