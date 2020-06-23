import { RECEIVE_RELATION, RECEIVE_RELATIONS } from "../constants"
import RelationReducer from "./RelationReducer"

describe('RelationReducer', () => {
  const relationReducer = new RelationReducer();

  it('returns default state with invalid action type', () => {
    const action = { type: '', payload: '' }

    expect(relationReducer.reducer(undefined, action)).toEqual(relationReducer.initialState);
  })

  describe(RECEIVE_RELATIONS, () => {
    it('should update relations state', () => {

      const payload = [
        {left: 1, right: 11, relationType: 111},
        {left: 2, right: 22, relationType: 222},
      ]
      const action = { type: RECEIVE_RELATIONS, payload: payload }

      const actualResult = relationReducer.reducer(relationReducer.initialState, action)
      const expectedResult = payload

      expect(actualResult).toEqual(expectedResult)
    })
  })

  describe(RECEIVE_RELATION, () => {
    it('should update relation state', () => {

      const payload = {left: 3, right: 33, relationType: 333}
      const action = { type: RECEIVE_RELATION, payload: payload }

      const actualResult = relationReducer.reducer(relationReducer.initialState, action)
      const expectedResult = [payload]

      expect(actualResult).toEqual(expectedResult)
    })

    it('should append to relation state', () => {

      relationReducer.initialState = [
        {left: 1, right: 11, relationType: 111},
        {left: 2, right: 22, relationType: 222},
      ]

      const payload = {left: 3, right: 33, relationType: 333}
      const action = { type: RECEIVE_RELATION, payload: payload }

      const actualResult = relationReducer.reducer(relationReducer.initialState, action)
      const expectedResult = [
        {left: 1, right: 11, relationType: 111},
        {left: 2, right: 22, relationType: 222},
        {left: 3, right: 33, relationType: 333}
      ]

      expect(actualResult).toEqual(expectedResult)
    })

    it('should not append undefined to relation state', () => {

      relationReducer.initialState = [
        {left: 1, right: 11, relationType: 111},
        {left: 2, right: 22, relationType: 222},
      ]

      const payload = undefined
      const action = { type: RECEIVE_RELATION, payload: payload }

      const actualResult = relationReducer.reducer(relationReducer.initialState, action)
      const expectedResult = [
        {left: 1, right: 11, relationType: 111},
        {left: 2, right: 22, relationType: 222}
      ]

      expect(actualResult).toEqual(expectedResult)
    })
  })
})