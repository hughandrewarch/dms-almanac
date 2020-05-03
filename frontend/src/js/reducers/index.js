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
      console.log(state)
      test(action.payload, state.relationTypes, state)
      console.log(state)
      console.log(action.payload)

      return state
    case RECEIVE_RELATION_TYPES:
      return Object.assign({}, state, {
        relationTypes: normalize(action.payload)
      })
    default:
      return state
  }
}

function test(relations, relationTypes, state) {
    relations.forEach(relation => {

        var relationType = relationTypes.byId[relation.relationType].name
        console.log("switch(" + relationType + ")")
        switch(relationType) {
            case "SettlementPerson":

                //TODO see if possible to extract method do deal with more general left right terms?
                if(state.settlements.byId[relation.left] !== undefined) {

                    var people = state.settlements.byId[relation.left].people ?
                                                    state.settlements.byId[relation.left].people.add(relation.right) :
                                                    new Set([relation.right])
                    var settlements = {[relation.left]: {  people: people   }}

                    Object.assign(state.settlements.byId[relation.left], settlements[relation.left]);
                }

                if(state.people.byId[relation.right] !== undefined) {

                    var settlements = state.people.byId[relation.right].settlements ?
                                                    state.people.byId[relation.right].settlements.add(relation.left) :
                                                    new Set([relation.left])
                    var people = {[relation.right]: {  settlements: settlements   }}

                    Object.assign(state.people.byId[relation.right], people[relation.right]);
                }

                break;
            default:
                console.log("NO")
                break;
        }
    })
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