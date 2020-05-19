import { createSelector } from 'reselect';
import { SETTLEMENT_PERSON } from "../constants/relations"
import SettlementsSelector from "./SettlementsSelector"

describe('SettlementSelector', () => {
    const state = {
        settlements: {
            byId: {
                1: { id: 1, name: 'one'},
                2: { id: 2, name: 'two'},
                3: { id: 3, name: 'three'}
            },
            allIds: [1, 2, 3]
        },
        people: {
            byId: {
                1: { id: 1, name: 'un'}
            },
            allIds: [1]
        },
        relationTypes: {
            byId: {
                1: { id: 1, name: 'SettlementPerson'}
            },
            allIds: [1]
        },
        relations: [{left: 2, right: 1, relationType: 1}]
    }

    describe('select', () => {
        it('select should return undefined if not found', () => {
            const selected = SettlementsSelector.select(state, 0)

            expect(selected).toEqual(undefined)
        })

        it('select should return settlement from state', () => {
            const selected = SettlementsSelector.select(state, 1)
            const expected = { id: 1, name: 'one' }

            expect(selected).toEqual(expected)
        })
    })

    describe('selectMany', () => {
        it('select should return empty list if none found', () => {
            const selected = SettlementsSelector.selectMany(state, [])

            expect(selected).toEqual([])
        })

        it('select should return all selected settlements from state', () => {
            const selected = SettlementsSelector.selectMany(state, [1, 2])
            const expected = [{ id: 1, name: 'one' }, { id: 2, name: 'two' }]

            expect(selected).toEqual(expected)
        })
    })

    describe('selectByPersonId', () => {
        it('select should return empty list if no relations found', () => {
            const selected = SettlementsSelector.selectByPersonId(state, 2)

            expect(selected).toEqual([])
        })

        it('select should return all selected settlements from state', () => {
            const selected = SettlementsSelector.selectByPersonId(state, 1)
            const expected = [{ id: 2, name: 'two' }]

            expect(selected).toEqual(expected)
        })

        describe('with incomplete state', () => {

            let updatedState
            beforeEach(() => {
                updatedState = Object.assign({}, state)
            });

            it('when missing relations, should return empty list', ()=> {
                updatedState.relations = []

                const selected = SettlementsSelector.selectByPersonId(updatedState, 1)

                expect(selected).toEqual([])
            })

            it('when missing relation types, should return empty list', ()=> {
                updatedState.relationTypes = { byId: {}, allIds: [] }

                const selected = SettlementsSelector.selectByPersonId(updatedState, 1)

                expect(selected).toEqual([])
            })

            it('when missing people, should return settlements based on relations', ()=> {
                updatedState.people = { byId: {}, allIds: [] }

                const selected = SettlementsSelector.selectByPersonId(updatedState, 1)
                const expected = [{ id: 2, name: 'two' }]

                expect(selected).toEqual(expected)
            })
        })
    })
})
