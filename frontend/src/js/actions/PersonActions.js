import { RECEIVE_PEOPLE } from "../constants"
import PeopleApi from "../api/PeopleApi"
import Actions from "./"

export default class PersonActions {

    static fetchPeople() {
        return async (dispatch, getState) => {
            dispatch(Actions.request())
            return PersonApi.getAll()
                .then((data) => {
                    dispatch(PersonActions.receivePeople(data))
                })
                .catch(console.log)
        }
    }

    static receivePeople(payload) {
      return  { type: RECEIVE_PEOPLE, payload: payload }
    }
}
