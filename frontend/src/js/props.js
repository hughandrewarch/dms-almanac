import PropTypes from 'prop-types'

//TODO consider removing name out of here?
export const LIST_ITEM = PropTypes.shape({
  id: PropTypes.number.required,
  name: PropTypes.string.required,
})

export const SETTLEMENTS = PropTypes.array
export const SETTLEMENT = PropTypes.shape({
  LIST_ITEM,
  population: PropTypes.number,
})

export const PLACE = PropTypes.shape({
  LIST_ITEM,
  description: PropTypes.string,
})

export const PEOPLE = PropTypes.array
export const PERSON = PropTypes.shape({
  id: PropTypes.number.required,
  name: PropTypes.string.required,
  race: PropTypes.string,
  description: PropTypes.string,
})
