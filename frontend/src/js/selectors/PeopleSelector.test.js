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
                2: { id: 2, name: 'deux'},
                3: { id: 3, name: 'trois'}
            },
            allIds: [1, 2, 3]
        },
        relationTypes: {
            byId: {
                1: { id: 1, name: 'SETTLEMENT_PERSON'}
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

    describe('selectAll', () => {
        it('select should return empty list if no people found', () => {
            const updatedState = Object.assign({}, state)
            updatedState.people = { byId: {}, allId: []}

            const selected = PeopleSelector.selectAll(updatedState)
            const expected = []

            expect(selected).toEqual(expected)
        })

        it('select should all people', () => {


            const selected = PeopleSelector.selectAll(state)
            const expected = [
                { id: 1, name: 'un'},
                { id: 2, name: 'deux'},
                { id: 3, name: 'trois'}
            ]

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
            const expected = [{ id: 1, name: 'un' }, { id: 2, name: 'deux' }]

            expect(selected).toEqual(expected)
        })
    })

    describe('selectBySettlementId', () => {
        it('select should return empty list if no relations found', () => {
            const selected = PeopleSelector.selectBySettlementId(state, 2)

            expect(selected).toEqual([])
        })

        it('select should return all selected people from state', () => {
            const selected = PeopleSelector.selectBySettlementId(state, 1)
            const expected = [{ id: 2, name: 'deux' }]

            expect(selected).toEqual(expected)
        })

        describe('with incomplete state', () => {

            let updatedState
            beforeEach(() => {
                updatedState = Object.assign({}, state)
            });

            it('when missing relations, should return empty list', ()=> {
                updatedState.relations = []

                const selected = PeopleSelector.selectBySettlementId(updatedState, 1)

                expect(selected).toEqual([])
            })

            it('when missing relation types, should return empty list', ()=> {
                updatedState.relationTypes = { byId: {}, allIds: [] }

                const selected = PeopleSelector.selectBySettlementId(updatedState, 1)

                expect(selected).toEqual([])
            })

            it('when missing settlements, should return people based on relations', ()=> {
                updatedState.settlements = { byId: {}, allIds: [] }

                const selected = PeopleSelector.selectBySettlementId(updatedState, 1)
                const expected = [{ id: 2, name: 'deux' }]

                expect(selected).toEqual(expected)
            })
        })
    })

    describe('selectUnrelatedBySettlement', () => {
        it('select should return all if no relations found', () => {
            const selected = PeopleSelector.selectUnrelatedBySettlement(state, 2)
            const expected = [{ id: 1, name: 'un'}, { id: 2, name: 'deux'}, { id: 3, name: 'trois'}]

            expect(selected).toEqual(expected)
        })

        it('select should return all unrelated people from state', () => {
            const selected = PeopleSelector.selectUnrelatedBySettlement(state, 1)
            const expected = [{ id: 1, name: 'un'}, { id: 3, name: 'trois'}]

            expect(selected).toEqual(expected)
        })

        it('select should return empty list if all are related', () => {
            let updatedState = Object.assign({}, state)
            updatedState.relations = [
                {left: 1, right: 1, relationType: 1},
                {left: 1, right: 2, relationType: 1},
                {left: 1, right: 3, relationType: 1}
            ]

            const selected = PeopleSelector.selectUnrelatedBySettlement(updatedState, 1)
            const expected = []

            expect(selected).toEqual(expected)
        })

        describe('with incomplete state', () => {

            let updatedState
            beforeEach(() => {
                updatedState = Object.assign({}, state)
            });

            it('when no relations, should return all people', ()=> {
                updatedState.relations = []
                const expected = [
                    { id: 1, name: 'un'},
                    { id: 2, name: 'deux'},
                    { id: 3, name: 'trois'}
                ]

                const selected = PeopleSelector.selectUnrelatedBySettlement(updatedState, 1)

                expect(selected).toEqual(expected)
            })

            it('when missing relation types, should return all people', ()=> {
                updatedState.relationTypes = { byId: {}, allIds: [] }
                const expected = [
                    { id: 1, name: 'un'},
                    { id: 2, name: 'deux'},
                    { id: 3, name: 'trois'}
                ]

                const selected = PeopleSelector.selectUnrelatedBySettlement(updatedState, 1)

                expect(selected).toEqual(expected)
            })

            it('when missing settlements, should return people based on relations', ()=> {
                updatedState.settlements = { byId: {}, allIds: [] }

                const selected = PeopleSelector.selectUnrelatedBySettlement(updatedState, 1)
                const expected = [
                    { id: 1, name: 'un'},
                    { id: 3, name: 'trois'}
                ]

                expect(selected).toEqual(expected)
            })
        })
    })
})
