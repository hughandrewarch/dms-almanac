import {RECEIVE_SETTLEMENTS, RECEIVE_PEOPLE, RECEIVE_RELATIONS, RECEIVE_RELATION_TYPES} from "../constants"

//TODO consider remove reducer or save for loading icon
const initialState = {
  settlements: { byId: {}, allIds: []},
  people: { byId: {}, allIds: []},
  relations: { byId: {}, allIds: []},
  relationTypes: { byId: {}, allIds: []},
  settlementsList: [],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SETTLEMENTS:
      return Object.assign({}, state, {
        settlements: normalize(action.payload)
      })
    case RECEIVE_PEOPLE:
      return Object.assign({}, state, {
        people: normalize(action.payload)
      })
    case RECEIVE_RELATIONS:
      return Object.assign({}, state, {
        relations: action.payload,
        normalized: false
      })
    case RECEIVE_RELATION_TYPES:
      return Object.assign({}, state, {
        relationTypes: normalize(action.payload)
      })
    default:
      return state
  }
}

function normalize(list) {

    var ids = list.map(item => {
        return item.id
    })

    var values = list.reduce(function(map, item) {
        map[item.id] = {id: item.id, name: item.name}
        return map;
    }, {});

    return {
        byId: values,
        allIds: ids
    }
}

export default rootReducer