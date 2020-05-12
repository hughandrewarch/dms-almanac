import {RECEIVE_SETTLEMENTS, RECEIVE_PEOPLE, RECEIVE_RELATIONS, RECEIVE_RELATION_TYPES, REQUEST} from "../constants"
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
        settlements: normalize(action.payload),
        isRequesting: false
      })
    case RECEIVE_PEOPLE:
      return Object.assign({}, state, {
        people: normalize(action.payload),
        isRequesting: false
      })
    case RECEIVE_RELATIONS:
      linkRelations(action.payload, state.relationTypes, state)
      return Object.assign({}, state, {
        isRequesting: false
      })
    case RECEIVE_RELATION_TYPES:
      return Object.assign({}, state, {
        relationTypes: normalize(action.payload),
        isRequesting: false
      })
    case REQUEST:
      return Object.assign({}, state, {
        isRequesting: true
      })
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
