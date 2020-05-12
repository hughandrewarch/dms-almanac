import { createSelector } from 'reselect';

export default class SettlementSelector {

    static select(state, settlementId) {

        const build = createSelector(
            settlementSelector(settlementId),
            peopleSelector(settlementId),
            buildSettlement
        )

        return build(state)
    }
}

function buildSettlement(settlement, people) {
    return {
        settlement: settlement,
        people: people
    }
}

function settlementSelector(settlementId) {
    return state => state.settlements.byId[settlementId]
}


//TODO add error handling
function peopleSelector(settlementId) {
    return state => {
        const settlement = state.settlements.byId[settlementId]

        return Array.from(settlement.people).map(personId => {
            const person = state.people.byId[personId]
            return {
                id: personId,
                name: person.name
            }
        })
    }
}
