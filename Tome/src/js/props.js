import PropTypes from 'prop-types'

//TODO consider removing name out of here?
export const LIST_ITEM = PropTypes.shape({
  id: PropTypes.number.required,
  name: PropTypes.string.required,
})

export const TOWN = PropTypes.shape({
  LIST_ITEM,
  population: PropTypes.number,
})

export const SPOT = PropTypes.shape({
  LIST_ITEM,
  description: PropTypes.string,
})

export const PERSON = PropTypes.shape({
  LIST_ITEM,
  race: PropTypes.string,
  description: PropTypes.string,
})