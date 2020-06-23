import { RECEIVE_PEOPLE, PERSON } from "../constants"
import PersonReducer from "./PersonReducer"

describe('PersonReducer', () => {
  const personReducer = new PersonReducer();

  it('returns default state with invalid action type', () => {
    const action = { type: '', payload: '' }

    expect(personReducer.reducer(undefined, action)).toEqual(personReducer.initialState);
  })

  describe(RECEIVE_PEOPLE, () => {
    it('should update people state', () => {

      const payload = [
        {id: 1, name: "one", description: "first", race: PERSON.RACE.HUMAN},
        {id: 2, name: "two", description: "second", race: PERSON.RACE.ELF}
        ]
        const action = { type: RECEIVE_PEOPLE, payload: payload }

      const actualResult = personReducer.reducer(personReducer.initialState, action)
      const expectedResult = {
        ...personReducer.initialState,
        byId: {},
        allIds: [],
      }

      expect(actualResult.allIds).toHaveLength(2)
      expect(Object.entries(actualResult.byId)).toHaveLength(2)
    })
  })
})