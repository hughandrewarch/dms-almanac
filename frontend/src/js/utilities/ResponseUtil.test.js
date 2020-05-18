import { RECEIVE_SETTLEMENTS } from "../constants"
import ResponseUtil from "./ResponseUtil"

describe('ResponseUtil', () => {
    const settlementReducer = new ResponseUtil();


    describe('normalize', () => {
        it('should return normalized form when normalizing empty list', () => {
            const data = []
            const normalizedData = ResponseUtil.normalize(data)

            const expectedResult = {
                byId: {},
                allIds: [],
            }

            expect(normalizedData).toEqual(expectedResult)
        })

        it('should normalize list of data', () => {

            const data = [{id:1, field:"one"}, {id:2, field:"two"}]

            const normalizedData = ResponseUtil.normalize(data)

            const expectedResult = {
                byId: {
                    1: {id:1, field:"one"},
                    2: {id:2, field:"two"}
                },
                allIds: [1, 2],
            }

            expect(normalizedData).toEqual(expectedResult)
        })

        it('should return empty normalized form when data isn\'t normalizable', () => {
            const data = [{field:"one"}, {field:"two"}]

            const normalizedData = ResponseUtil.normalize(data)

            const expectedResult = {
                byId: {},
                allIds: [],
            }

            expect(normalizedData).toEqual(expectedResult)
        })

        it('should return normalized data of partially normalizable response', () => {
            const data = [{id: 1, field:"one"}, {field:"two"}]

            const normalizedData = ResponseUtil.normalize(data)

            const expectedResult = {
                byId: {
                    1: {id: 1, field:"one"}
                },
                allIds: [1],
            }

            expect(normalizedData).toEqual(expectedResult)
        })

        it('should return empty normalized form when data isn\'t a list', () => {
            const data = {id: 1, field:"one"}

            const normalizedData = ResponseUtil.normalize(data)

            const expectedResult = {
                byId: {},
                allIds: [],
            }

            expect(normalizedData).toEqual(expectedResult)
        })
    })

})