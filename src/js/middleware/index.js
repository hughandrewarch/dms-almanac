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

          let spots = spotList.filter(spot => spot.townId === townId)
          town.spots = spots

          let people = peopleList.filter(person => person.townId === townId)
          town.people = people
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
  {
    id: 1,
    name: 'Hughan',
    population: 5000,
    description: "Capital city, 3 wall layers, 9 districts and a castle",
  },
  {
    id: 2,
    name: 'Amberlea',
    population: 1000,
    description: "farming central, fortified storehouses, elevated on walls",
  },
  {
    id: 3,
    name: 'Roseport',
    population: 800,
    description: "largest port city",
  },
  {
    id: 4,
    name: 'Elkshorn',
    population: 500,
    description: "small hunting village on the edge of the fireleaf forest",
  }
]

const spotList = [
  { id: 1, name: 'poi1a', townId: 1 },
  { id: 2, name: 'poi1b', townId: 1 },
  { id: 3, name: 'poi1c', townId: 1 },
  { id: 4, name: 'poi2a', townId: 2 },
  { id: 5, name: 'poi3a', townId: 3 },
  { id: 6, name: 'poi3b', townId: 3 },
  { id: 7, name: 'poi4a', townId: 4 }
]

const allSpotsFull = [
  {
    id: 1,
    name: 'poi1',
    description: 'description-1'
  },
  {
    id: 2,
    name: 'poi2',
    description: 'description-2'
  },
  {
    id: 3,
    name: 'poi3',
    description: 'description-3'
  },
  {
    id: 4,
    name: 'poi4',
    description: 'description-4'
  }
]

const peopleList = [
  { id: 1, name: 'person a', townId: 1 },
  { id: 2, name: 'person b', townId: 1 },
  { id: 3, name: 'person c', townId: 2 },
  { id: 4, name: 'person d', townId: 2 },
  { id: 5, name: 'person e', townId: 2 },
  { id: 6, name: 'person f', townId: 3 },
  { id: 7, name: 'person g', townId: 4 },
  { id: 8, name: 'person h', townId: 4 }
]
