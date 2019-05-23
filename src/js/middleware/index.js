import { FETCH_TOWN, FETCH_TOWN_LIST } from "../constants"
import { receiveTown, receiveTownList } from "../actions"

export function townMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      //TODO 1 : use an api call to get (once i make a backend),
      //     1b: shouldn't need parse int at this point
      switch (action.type) {
        case FETCH_TOWN_LIST:
          return dispatch(receiveTownList(townList))
        case FETCH_TOWN:
          const townId = parseInt(action.payload)
          let town = allFullTowns.filter(town => town.id === townId)[0]
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
