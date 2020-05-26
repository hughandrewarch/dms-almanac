import { RECEIVE_PERSON, RECEIVE_PEOPLE } from "js/constants"
import PersonApi from "js/api/PersonApi"
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

    static create(person) {
        return async (dispatch) => {
            return PersonApi.create(person).then((data) => {
                dispatch(PersonActions.receivePerson(data))
            })
            .catch(console.log)
        }
    }

    static receivePerson(payload) {
      return  { type: RECEIVE_PERSON, payload: payload }
    }

    static receivePeople(payload) {
      return  { type: RECEIVE_PEOPLE, payload: payload }
    }
}
