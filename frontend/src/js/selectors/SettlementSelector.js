import { createSelector } from 'reselect';
import PeopleSelector from "./PeopleSelector"

export default class SettlementSelector {

    static select(state, settlementId) {

        const settlement = settlementSelector(settlementId)

        return settlement(state)
    }
}

function settlementSelector(settlementId) {
    return state => state.settlements.byId[settlementId]
}

