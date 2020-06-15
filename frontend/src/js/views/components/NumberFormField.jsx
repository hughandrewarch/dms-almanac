import React from 'react'
import PropTypes from 'prop-types'
import { VALIDATORS as v } from 'js/utilities/ValidationUtil'
import InputFormField from './InputFormField'

//text form field
export default class NumberFormField extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    nonNegative: PropTypes.bool,
    isRequired: PropTypes.bool
  }

  constructor(props) {
      super(props)
      this.validators = []

      if(this.props.isRequired) {
        this.validators.push(v.REQUIRED)
      }

      if(this.props.nonNegative) {
        this.validators.push(v.NON_NEGATIVE)
      }

  }

  render = () => {
      return (
        <InputFormField {...this.props}
            name={this.props.name}
            type="number"
            validators={this.validators}/>
    )
  }
}