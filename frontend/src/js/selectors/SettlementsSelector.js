import { createSelector } from 'reselect';
import { SETTLEMENT_PERSON } from "../constants/relations"

export default class SettlementsSelector {

    static select(state, settlementId) {

        const settlement = settlementSelector(settlementId)

        return settlement(state)
    }

    static selectAll(state) {
        const settlements = state => Object.values(state.settlements.byId)

        return settlements(state)
    }

    static selectMany(state, settlementIds) {

        const settlements = settlementsSelector(settlementIds)

        return settlements(state)
    }

    static selectByPersonId(state, personId) {

        const settlementPeopleRelations = settlementPeopleRelationsSelector(personId)

        const settlementIds = Object.values(settlementPeopleRelations(state)).map(function(relation) {
            return relation.left
        })

        return SettlementsSelector.selectMany(state, settlementIds)
    }
}

function settlementSelector(settlementId) {
    return state => state.settlements.byId[settlementId]
}

function settlementsSelector(peopleIds) {
    return state => {
        let settlements = state.settlements
        if(!settlements) {
            return []
        } else {
            return Object.values(state.settlements.byId).filter(function(item) {
                return peopleIds.includes(item.id);
            })
        }
    }
}

const relationsSelector = state => state.relations

function settlementPeopleRelationsSelector(personId) {
    return filterRelationsSelector(personId, SETTLEMENT_PERSON)
}

function filterRelationsSelector(rightId, relationTypeName) {

    return createSelector(
        relationsSelector,
        state => rightId,
        relationTypeSelector(relationTypeName),
        filterRelations
    )
}

function filterRelations(relations, rightId, relationType) {

    const relationTypeId  = relationType ? relationType.id : undefined

    return Object.values(relations).filter(function(relation) {
        return relation.right == rightId && relation.relationType == relationTypeId
    })
}

function relationTypeSelector(relationTypeName) {

    return state => {
        let relationTypes = state.relationTypes.byId

        return Object.values(relationTypes).find(relationType => relationType.name == relationTypeName)
    }
}
