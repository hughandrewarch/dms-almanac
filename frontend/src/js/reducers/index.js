import { combineReducers } from 'redux';
import { RECEIVE_SETTLEMENTS, RECEIVE_PEOPLE, RECEIVE_RELATIONS, RECEIVE_RELATION_TYPES, REQUEST } from "../constants"
import { SETTLEMENTS, PEOPLE } from "../constants/state_keys"
import { SETTLEMENT_PERSON } from "../constants/relations"
import SettlementReducer from "./SettlementReducer"
import PersonReducer from "./PersonReducer"
import RelationTypeReducer from "./RelationTypeReducer"
import RelationReducer from "./RelationReducer"

//TODO consider remove reducer or save for loading icon
const initialState = {
  settlements: { byId: {}, allIds: []},
  people: { byId: {}, allIds: []},
  relations: { byId: {}, allIds: []},
  relationTypes: { byId: {}, allIds: []},
  settlementsList: [],
}

export default combineReducers({
    settlements: new SettlementReducer().reducer,
    people: new PersonReducer().reducer,
    relationTypes: new RelationTypeReducer().reducer,
    relation: new RelationReducer().reducer,
    root: rootReducer,
})

//export default (history) => {
//      const reducerMap = {
//            settlements: new SettlementReducer().reducer,
//            root: rootReducer,
//      };
//
//      return combineReducers(
//            reducerMap
//      );
//};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return Object.assign({}, state, {
        isRequesting: true
      })
    default:
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

//export default rootReducer
