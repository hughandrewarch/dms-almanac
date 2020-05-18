import { RECEIVE_SETTLEMENTS } from "../constants"
import SettlementReducer from "./SettlementReducer"

describe('SettlementReducer', () => {
  const settlementReducer = new SettlementReducer();

  it('returns default state with invalid action type', () => {
    const action = { type: '', payload: '' }

    expect(settlementReducer.reducer(undefined, action)).toEqual(settlementReducer.initialState);
  })

  describe(RECEIVE_SETTLEMENTS, () => {
    it('should update settlements state', () => {

      const payload = [
        {id: 1, name: "one", description: "first", population: 1001},
        {id: 2, name: "two", description: "second", population: 1002}
        ]
        const action = { type: RECEIVE_SETTLEMENTS, payload: payload }

      const actualResult = settlementReducer.reducer(settlementReducer.initialState, action)
      const expectedResult = {
        ...settlementReducer.initialState,
        byId: {},
        allIds: [],
      }

      expect(actualResult.allIds).toHaveLength(2)
      expect(Object.entries(actualResult.byId)).toHaveLength(2)
    })
  })
})