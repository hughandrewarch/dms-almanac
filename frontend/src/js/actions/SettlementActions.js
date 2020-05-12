import { RECEIVE_SETTLEMENTS } from "../constants"
import SettlementApi from "../api/SettlementApi"
import Actions from "./"

//TODO keep moving, look at actionUtility
//TODO move fetchs into a reducer, actions should be pure, like place
export default class SettlementActions {

    static fetchSettlements() {
        return async (dispatch, getState) => {
            dispatch(Actions.request())
            return SettlementApi.getAll()
                .then((data) => {
                    dispatch(SettlementActions.receiveSettlements(data))
                })
                .catch(console.log)
        }
    }

    static receiveSettlements(payload) {
      return  { type: RECEIVE_SETTLEMENTS, payload: payload }
    }
}
