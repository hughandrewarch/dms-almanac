import { RECEIVE_SETTLEMENT, RECEIVE_SETTLEMENTS } from "../constants"
import SettlementReducer from "./SettlementReducer"

describe('SettlementReducer', () => {
  const settlementReducer = new SettlementReducer();

    it('returns default state with invalid action type', () => {
        const action = { type: '', payload: '' }

        expect(settlementReducer.reducer(undefined, action)).toEqual(settlementReducer.initialState);
    })

    describe(RECEIVE_SETTLEMENT, () => {
        it('should update settlements state', () => {

            const payload = { settlement:
                { id: 1, name: "one", description: "first", population: 1001 }
            }
            const action = { type: RECEIVE_SETTLEMENT, payload: payload }

            const result = settlementReducer.reducer(settlementReducer.initialState, action)

            expect(result.allIds).toHaveLength(1)
            expect(Object.entries(result.byId)).toHaveLength(1)
        })

        it('should append settlement to existing state', () => {

            settlementReducer.initialState = {
                byId: {
                    1: { id: 1, name: "one", description: "first", population: 1001 },
                    2: { id: 2, name: "two", description: "second", population: 1002 }
                },
                allIds: [1, 2]
            }

            const payload = {
                settlement: { id: 3, name: "three", description: "third", population: 1003 }
            }
            const action = { type: RECEIVE_SETTLEMENT, payload: payload }

            const result = settlementReducer.reducer(settlementReducer.initialState, action)

            expect(result.allIds).toHaveLength(3)
            expect(Object.entries(result.byId)).toHaveLength(3)
        })
    })

    describe(RECEIVE_SETTLEMENTS, () => {
        it('should update settlements state', () => {

            const payload = [
                {id: 1, name: "one", description: "first", population: 1001},
                {id: 2, name: "two", description: "second", population: 1002}
            ]
            const action = { type: RECEIVE_SETTLEMENTS, payload: payload }

            const result = settlementReducer.reducer(settlementReducer.initialState, action)

            expect(result.allIds).toHaveLength(2)
            expect(Object.entries(result.byId)).toHaveLength(2)
        })
    })
})