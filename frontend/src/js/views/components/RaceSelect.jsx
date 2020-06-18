import React from 'react'
import PropTypes from 'prop-types'
import SelectFormField from './SelectFormField'
import { VALIDATORS as v } from 'js/utilities/ValidationUtil'
import { PERSON } from 'js/constants'

export default class RaceSelect extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isRequired: PropTypes.bool
  }

  constructor(props) {
      super(props)
      this.races = Object.values(PERSON.RACE).map(race => {
        return {key: race.key, name: race.name }
      })
      this.validators = []

      if(this.props.isRequired) {
        this.validators.push(v.REQUIRED)
      }
  }

  render = () => {
      return (
          <SelectFormField {...this.props}
              name={this.props.name}
              options={this.races}
              validators={this.validators}/>
    )
  }
}