import { RECEIVE_SETTLEMENT, RECEIVE_SETTLEMENTS } from "js/constants"
import SettlementApi from "js/api/SettlementApi"
import Actions from "js/actions"

//TODO keep moving, look at actionUtility
//TODO move fetchs into a reducer, actions should be pure, like place
export default class SettlementActions {

    static fetchSettlements() {
        return async (dispatch) => {
            dispatch(Actions.request())
            return SettlementApi.getAll()
                .then((data) => {
                    dispatch(SettlementActions.receiveSettlements(data))
                })
                .catch(console.log)
        }
    }

    static create(settlement) {
        return async (dispatch) => {
            return SettlementApi.create(settlement).then((data) => {
                dispatch(SettlementActions.receiveSettlement(data))
            })
            .catch(console.log)
        }
    }

    static receiveSettlement(payload) {
      return  { type: RECEIVE_SETTLEMENT, payload: payload }
    }

    static receiveSettlements(payload) {
      return  { type: RECEIVE_SETTLEMENTS, payload: payload }
    }
}
