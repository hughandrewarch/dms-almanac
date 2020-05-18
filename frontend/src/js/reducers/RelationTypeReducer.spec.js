import { RECEIVE_RELATION_TYPES } from "../constants"
import RelationTypeReducer from "./RelationTypeReducer"

describe('RelationTypeReducer', () => {
  const relationTypeReducer = new RelationTypeReducer();

  it('returns default state with invalid action type', () => {
    const action = { type: '', payload: '' }

    expect(relationTypeReducer.reducer(undefined, action)).toEqual(relationTypeReducer.initialState);
  })

  describe(RECEIVE_RELATION_TYPES, () => {
    it('should update relationTypes state', () => {

      const payload = [
        {id: 1, name: "one"},
        {id: 2, name: "two"}
        ]
        const action = { type: RECEIVE_RELATION_TYPES, payload: payload }

      const actualResult = relationTypeReducer.reducer(relationTypeReducer.initialState, action)
      const expectedResult = {
        ...relationTypeReducer.initialState,
        byId: {},
        allIds: [],
      }

      expect(actualResult.allIds).toHaveLength(2)
      expect(Object.entries(actualResult.byId)).toHaveLength(2)
    })
  })
})