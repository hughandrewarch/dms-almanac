import { createSelector } from 'reselect'
import { SETTLEMENT_PERSON } from "../constants/relations"

export default class PeopleSelector {

    static select(state, personId) {

        const person = personSelector(personId)

        return person(state)
    }

    static selectAll(state) {
        const people = state => Object.values(state.people.byId)

        return people(state)
    }

    static selectMany(state, peopleIds) {

        const people = peopleSelector(peopleIds)

        return people(state)
    }

    static selectBySettlementId(state, settlementId) {

        const settlementPeopleRelations = settlementPeopleRelationsSelector(settlementId)

        const settlementPeopleIds = Object.values(settlementPeopleRelations(state)).map(function(relation) {
            return relation.right
        })

        return PeopleSelector.selectMany(state, settlementPeopleIds)
    }
}

function personSelector(personId) {
    return state => state.people.byId[personId]
}

function peopleSelector(peopleIds) {
    return state => {
        let people = state.people
        if(!people) {
            return []
        } else {
            return Object.values(state.people.byId).filter(function(item) {
                return peopleIds.includes(item.id);
            })
        }
    }
}

const relationsSelector = state => state.relations

function settlementPeopleRelationsSelector(settlementId) {
    return filterRelationsSelector(settlementId, SETTLEMENT_PERSON)
}

function filterRelationsSelector(leftId, relationTypeName) {

    return createSelector(
        relationsSelector,
        state => leftId,
        relationTypeSelector(relationTypeName),
        filterRelations
    )
}

function filterRelations(relations, leftId, relationType) {

    const relationTypeId  = relationType ? relationType.id : undefined

    return Object.values(relations).filter(function(relation) {
        return relation.left == leftId && relation.relationType == relationTypeId
    })
}

function relationTypeSelector(relationTypeName) {

    return state => {
        let relationTypes = state.relationTypes.byId

        return Object.values(relationTypes).find(relationType => relationType.name == relationTypeName)
    }
}
