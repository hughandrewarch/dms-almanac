import {RECEIVE_SETTLEMENTS} from "../constants"

//TODO consider remove reducer or save for loading icon
const initialState = {
  settlements: { byId: {}, allIds: []},
  settlementsList: [],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SETTLEMENTS:

      return Object.assign({}, state, {
        settlements: normalize(action.payload)
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