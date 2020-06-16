export default class ValidationUtil {

    static isValid = (value, validators) => {
        let isValid = true

        validators.forEach((validator) => {
            isValid &= validator(value)
        })

        return Boolean(isValid)
    }
}

const isEmpty = (value) => {
    return value == ""
}

const isNotEmpty = (value) => {
    return !isEmpty(value)
}

const isNegative = (value) => {
    return value < 0
}

const nonNegative = (value) => {
    return !isNegative(value)
}

export const VALIDATORS = {
    REQUIRED: isNotEmpty,
    NON_NEGATIVE: nonNegative
}