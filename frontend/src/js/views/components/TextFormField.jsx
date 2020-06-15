import React from 'react'
import PropTypes from 'prop-types'
import { VALIDATORS as v } from 'js/utilities/ValidationUtil'
import InputFormField from './InputFormField'

export default class TextFormField extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
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
        <InputFormField {...this.props}
            name={this.props.name}
            type="text"
            validators={this.validators}/>
    )
  }
}