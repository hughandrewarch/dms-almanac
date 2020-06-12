export default class ValidationUtil {

    super(props) {
        this(props)
    }

    static validate = (value, validators) => {
        let isValid = true

        validators.forEach((validator) => {
            isValid &= validateMap(value, validator)
        })

        return isValid
    }
}

export const VALIDATORS = {
    REQUIRED: "REQUIRED",
    NON_NEGATIVE: "NON_NEGATIVE"
}

function validateMap(value, validator) {
    switch(validator) {
        case VALIDATORS.REQUIRED:
            return isNotEmpty(value)
        case VALIDATORS.NON_NEGATIVE:
            return !isNegative(value)
        default:
            return true
    }
}

function isEmpty(value) {
    return value == ""
}

function isNotEmpty(value) {
    return !isEmpty(value)
}

function isNegative(value) {
    return value < 0
}

