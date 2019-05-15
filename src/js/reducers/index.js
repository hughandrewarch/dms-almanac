import { FETCH_TOWNS } from "../constants"

const initialState = {
  towns: []
}

function rootReducer(state = initialState, action) {

  switch (action.type) {
    //TODO this isn't really fetching towns, it's just showing them,
    //   I would like to add a psuedo async fetch and then a display
    //   reducer for towns, I can then find the best place to make the
    //   fetch call

    case FETCH_TOWNS:
      return Object.assign({}, state, {
        towns: state.towns.concat(action.payload)
      })
    default:
      return state
  }

}

export default rootReducer