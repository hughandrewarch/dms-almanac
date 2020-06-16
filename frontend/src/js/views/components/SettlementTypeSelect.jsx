import React from 'react'
import PropTypes from 'prop-types'
import SelectFormField from './SelectFormField'
import { VALIDATORS as v } from 'js/utilities/ValidationUtil'
import { SETTLEMENT } from 'js/constants'

export default class SettlementTypeSelect extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isRequired: PropTypes.bool
  }

  constructor(props) {
      super(props)
      this.validators = []

      if(this.props.isRequired) {
        this.validators.push(v.REQUIRED)
      }
  }

  render = () => {
      return (
          <SelectFormField {...this.props}
              name={this.props.name}
              options={SETTLEMENT.TYPE}
              validators={this.validators}/>
    )
  }
}