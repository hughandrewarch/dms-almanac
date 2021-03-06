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

    describe('selectAll', () => {
        it('select should return empty list if no settlements if not found', () => {
            const updatedState = Object.assign({}, state)
            updatedState.settlements = { byId: {}, allId: []}

            const selected = SettlementsSelector.selectAll(updatedState)
            const expected = []

            expect(selected).toEqual(expected)
        })

        it('select should all settlements', () => {


            const selected = SettlementsSelector.selectAll(state)
            const expected = [
                { id: 1, name: 'one'},
                { id: 2, name: 'two'},
                { id: 3, name: 'three'}
            ]

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

            let modifiedState
            beforeEach(() => {
                modifiedState = Object.assign({}, state)
            });

            it('when missing relations, should return empty list', ()=> {
                modifiedState.relations = []

                const selected = SettlementsSelector.selectByPersonId(modifiedState, 1)

                expect(selected).toEqual([])
            })

            it('when missing relation types, should return empty list', ()=> {
                modifiedState.relationTypes = { byId: {}, allIds: [] }

                const selected = SettlementsSelector.selectByPersonId(modifiedState, 1)

                expect(selected).toEqual([])
            })

            it('when missing people, should return settlements based on relations', ()=> {
                modifiedState.people = { byId: {}, allIds: [] }

                const selected = SettlementsSelector.selectByPersonId(modifiedState, 1)
                const expected = [{ id: 2, name: 'two' }]

                expect(selected).toEqual(expected)
            })
        })
    })
})
