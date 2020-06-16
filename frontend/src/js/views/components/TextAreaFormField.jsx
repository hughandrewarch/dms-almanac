import React from 'react'
import PropTypes from 'prop-types'
import ValidationUtil, { VALIDATORS as v } from 'js/utilities/ValidationUtil'

export default class TextAreaFormField extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    isRequired: PropTypes.bool
  }

  constructor(props) {
      super(props)

      this.validators = []
      this.state = {
          value: props.value
      }

      if(this.props.isRequired) {
          this.validators.push(v.REQUIRED)
      }
  }

  componentDidMount() {
    this.updateValue(this.state.value)
  }

  //TODO will be changed to return array of error enum
  validate(value) {
    return ValidationUtil.isValid(value, this.validators)
  }

  changeHandler = event => {
    this.updateValue(event.target.value)
  }

  updateValue(value) {
    this.setState({
      value: value
    }, this.onChange)
  }

  onChange = () => {
    this.props.onChange({
        target: {
            name: this.props.name,
            value: this.state.value,
            errors: !this.validate(this.state.value),
        }
    })
  }

  render = () => {
    return (
        <textarea {...this.props}
            name={this.props.name}
            value={this.state.value}
            onChange={this.changeHandler}/>
    )
  }
}
