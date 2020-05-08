import {RECEIVE_SETTLEMENTS, RECEIVE_PEOPLE, RECEIVE_RELATIONS, RECEIVE_RELATION_TYPES} from "../constants"
import {FETCH_SETTLEMENTS, FETCH_PEOPLE, FETCH_RELATIONS, FETCH_RELATION_TYPES} from "../constants"
import { fetchSettlementsOld, fetchPeopleOld, fetchRelationsOld, fetchRelationTypesOld, fetchSettlementsNew } from "../actions"
import {SETTLEMENTS, PEOPLE} from "../constants/state_keys"
import {SETTLEMENT_PERSON} from "../constants/relations"

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
      linkRelations(action.payload, state.relationTypes, state)
      return state
    case RECEIVE_RELATION_TYPES:
      return Object.assign({}, state, {
        relationTypes: normalize(action.payload)
      })
    case FETCH_SETTLEMENTS:
        console.log("FETCH_SETTLEMENTS")
        fetchSettlementsNew()
        break;
    case FETCH_PEOPLE:
        console.log("FETCH_PEOPLE")
        fetchPeopleOld()
        break;
    case FETCH_RELATIONS:
        console.log("FETCH_RELATIONS")
        fetchRelationsOld()
        break;
    case FETCH_RELATION_TYPES:
        console.log("FETCH_RELATION_TYPES")
        fetchRelationTypesOld()
        break;
    default:
        console.log(action.type)
        return state
  }
}

function linkRelations(relations, relationTypes, state) {
    relations.forEach(relation => {
        var relationType = relationTypes.byId[relation.relationType].name

        switch(relationType) {
            case SETTLEMENT_PERSON:
                processRelations(SETTLEMENTS, PEOPLE, relation, state)
                break;
            default:
                break;
        }
    })
}

//TODO move out of reducer
function buildRelationObject(originalRelations, newRelationId) {

    var relation = originalRelations ?
                    originalRelations.add(newRelationId) :
                    new Set([newRelationId])
    return relation
}

function addRelations(name, id, relationName, relationId, state) {
    if(state[name].byId[id] !== undefined) {
        let relations = {}

        let originalRelations = state[name].byId[id][relationName]
        relations[relationName] = buildRelationObject(originalRelations, relationId)

        Object.assign(state[name].byId[id], relations);
    }
}

function processRelations(leftName, rightName, relation, state) {
     addRelations(leftName, relation.left, rightName, relation.right, state)
     addRelations(rightName, relation.right, leftName, relation.left, state)
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
