import React from 'react'
import PropTypes from 'prop-types'
import SelectFormField from './SelectFormField'
import { VALIDATORS as v } from 'js/utilities/ValidationUtil'
import { SETTLEMENT } from 'js/constants'
import capitalize from 'lodash/capitalize'

export default class SettlementTypeSelect extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isRequired: PropTypes.bool
  }

  constructor(props) {
      super(props)
      this.validators = []

      this.options = Object.values(SETTLEMENT.TYPE).map(type => {
        return {key: type, name: capitalize(type) }
      })

      if(this.props.isRequired) {
        this.validators.push(v.REQUIRED)
      }
  }

  render = () => {
      return (
          <SelectFormField {...this.props}
              name={this.props.name}
              options={this.options}
              validators={this.validators}/>
    )
  }
}