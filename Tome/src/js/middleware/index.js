import { CREATE_SETTLEMENT, FETCH_PERSON, FETCH_SETTLEMENT, FETCH_SETTLEMENT_LIST } from "../constants"
import { receivePerson, receiveSettlement, receiveSettlementList } from "../actions"

//TODO break out to either multiple middleware or rename?
export function tomeMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      switch (action.type) {
        //TODO move calls somewhere nice
        case FETCH_SETTLEMENT_LIST:
          fetch('http://localhost:8080/settlements')
            .then(res => res.json())
            .then((data) => {
              dispatch(receiveSettlementList(data))
            })
            .catch(console.log)
          break
        case FETCH_SETTLEMENT:
          const settlementId = parseInt(action.payload)
          fetch('http://localhost:8080/settlement/' + settlementId)
            .then(res => res.json())
            .then((data) => {
              dispatch(receiveSettlement(data))
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
        case CREATE_SETTLEMENT:
          fetch('http://localhost:8080/settlement', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:
              JSON.stringify({
                'name': action.payload.name,
                'population': parseInt(action.payload.population),
                'description': action.payload.description,
                'type': 'TOWN'
              })
          })
            .catch(console.log)
          break

        default:
      }
      return next(action)
    }
  }
}
