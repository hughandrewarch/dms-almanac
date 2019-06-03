import { FETCH_TOWN, FETCH_TOWN_LIST } from "../constants"
import { receiveTown, receiveTownList } from "../actions"

export function townMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      //TODO 1 : use an api call to get (once i make a backend),
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
          break;
        default:
      }
      return next(action)
    }
  }
}
