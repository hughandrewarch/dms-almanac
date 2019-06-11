import { FETCH_PERSON, FETCH_TOWN, FETCH_TOWN_LIST } from "../constants"
import { receivePerson, receiveTown, receiveTownList } from "../actions"

export function townMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      switch (action.type) {
        case FETCH_TOWN_LIST:
          //TODO move call somewhere nice
          fetch('http://localhost:8080/towns')
            .then(res => res.json())
            .then((data) => {
              dispatch(receiveTownList(data))
            })
            .catch(console.log)
          break
        case FETCH_TOWN:
          const townId = parseInt(action.payload)
          fetch('http://localhost:8080/town/' + townId)
            .then(res => res.json())
            .then((data) => {
              dispatch(receiveTown(data))
            })
            .catch(console.log)
          break
        case FETCH_PERSON:
          const personId = parseInt(action.payload)
          fetch('http://localhost:8080/person/' + personId)
            .then(res => res.json())
            .then((data) => {
              dispatch(receivePerson(data))
            })
            .catch(console.log)
          break

        default:
      }
      return next(action)
    }
  }
}
