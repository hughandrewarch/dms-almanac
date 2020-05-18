import { createSelector } from 'reselect';
import { SETTLEMENT_PERSON } from "../constants/relations"
import PeopleSelector from "./PeopleSelector"

describe('PeopleSelector', () => {
    const state = {
        settlements: {
            byId: {
                1: { id: 1, name: 'one'}
            },
            allIds: [1]
        },
        people: {
            byId: {
                1: { id: 1, name: 'un'},
                2: { id: 2, name: 'duex'},
                3: { id: 3, name: 'trois'}
            },
            allIds: [1, 2, 3]
        },
        relationTypes: {
            byId: {
                1: { id: 1, name: 'SettlementPerson'}
            },
            allIds: [1]
        },
        relations: [{left: 1, right: 2, relationType: 1}]
    }

    describe('select', () => {
        it('select should return undefined if not found', () => {
            const selected = PeopleSelector.select(state, 0)

            expect(selected).toEqual(undefined)
        })

        it('select should return settlement from state', () => {
            const selected = PeopleSelector.select(state, 1)
            const expected = { id: 1, name: 'un' }

            expect(selected).toEqual(expected)
        })
    })

    describe('selectMany', () => {
        it('select should return empty list if nun found', () => {
            const selected = PeopleSelector.selectMany(state, [])

            expect(selected).toEqual([])
        })

        it('select should return all selected people from state', () => {
            const selected = PeopleSelector.selectMany(state, [1, 2])
            const expected = [{ id: 1, name: 'un' }, { id: 2, name: 'duex' }]

            expect(selected).toEqual(expected)
        })
    })

    describe('selectByPersonId', () => {
        it('select should return empty list if no relations found', () => {
            const selected = PeopleSelector.selectBySettlementId(state, 2)

            expect(selected).toEqual([])
        })

        it('select should return all selected people from state', () => {
            const selected = PeopleSelector.selectBySettlementId(state, 1)
            const expected = [{ id: 2, name: 'duex' }]

            expect(selected).toEqual(expected)
        })
    })
})
