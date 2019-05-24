import PropTypes from 'prop-types'

//TODO maybe add list prop type
export const TOWN = PropTypes.shape({
  id: PropTypes.number.required,
  name: PropTypes.string.required,
  population: PropTypes.number,
})

export const SPOT = PropTypes.shape({
  id: PropTypes.number.required,
  name: PropTypes.string.required,
  description: PropTypes.string,
})