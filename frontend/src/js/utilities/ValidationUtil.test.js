import { RECEIVE_SETTLEMENTS } from "../constants"
import ValidationUtil, { VALIDATORS as v } from "./ValidationUtil"

describe('ValidationUtil', () => {
    describe('validate', () => {
        describe('REQUIRED', () => {
            const validators = [v.REQUIRED]

            it('should return false with empty value', () => {
                const value = ""
                const isValid = ValidationUtil.validate(value, validators)

                expect(isValid).toEqual(false)
            })

            it('should return true with value', () => {
                const value = "value"
                const isValid = ValidationUtil.validate(value, validators)

                expect(isValid).toEqual(true)
            })
        })

        describe('NON_NEGATIVE', () => {
            const validators = [v.NON_NEGATIVE]

            it('should return false with negative value', () => {
                const value = -1
                const isValid = ValidationUtil.validate(value, validators)

                expect(isValid).toEqual(false)
            })

            it('should return true with non negative value', () => {
                const value = 0
                const isValid = ValidationUtil.validate(value, validators)

                expect(isValid).toEqual(true)
            })
        })
    })
})