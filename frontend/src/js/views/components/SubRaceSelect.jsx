import React from 'react'
import PropTypes from 'prop-types'
import SelectFormField from './SelectFormField'
import { VALIDATORS as v } from 'js/utilities/ValidationUtil'
import { PERSON } from 'js/constants'
import { get } from 'lodash'

export default class SubRaceSelect extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    isRequired: PropTypes.bool
  }

  constructor(props) {
      super(props)

      this.validators = []
      this.subraces = []

      if(this.props.isRequired) {
        this.validators.push(v.REQUIRED)
      }
  }

  componentDidUpdate(prevProps) {
      const { race } = this.props

      const subraceObject = get(PERSON, ['RACE', race, 'SUBRACE'], [])

      this.subraces = Object.values(subraceObject).map(subrace => {
        return {key: subrace.key, name: subrace.name }
      })
  }

  getSubrace(race) {
        const subraceObject = get(PERSON, ['RACE', race, 'SUBRACE'], [])

        return Object.values(subraceObject).map(subrace => {
          return {key: subrace.key, name: subrace.name }
        })
  }

  render = () => {
      const subraces = this.getSubrace(this.props.race)

      if(subraces.length > 0) {
          return (
            <SelectFormField {...this.props}
              name={this.props.name}
              options={subraces}
              validators={this.validators}/>
            )
      } else {
        return null
      }
  }
}