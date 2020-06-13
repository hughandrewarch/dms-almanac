import React from 'react'
import PropTypes from 'prop-types'
import ValidationUtil from 'js/utilities/ValidationUtil'

//text form field
export default class InputFormField extends React.Component {
  //todo add validator functions
  //todo maybe pull validation out to form or form fields level?
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    validators: PropTypes.arrayOf(PropTypes.string),
  }

  constructor(props) {
      super(props)

      this.state = {
          value: props.value,
          isValid: this.validate(props.value)
      }
  }

  validate(value) {
    return ValidationUtil.validate(value, this.props.validators)
  }

  changeHandler = event => {
    const value = event.target.value

    this.setState({
        value: value
    }, this.onChange)
  }

  onChange = () => {
    this.props.onChange({
        target: {
            name: this.props.name,
            value: this.state.value,
            isValid: this.validate(this.state.value),
        }
    })
  }

  render = () => {
    console.log("Input rerender", this.props)
    console.log("Input rerender", this.state)

    return (
        <input
            className={this.props.className}
            name={this.props.name}
            type={this.props.type}
            value={this.state.value}
            onChange={this.changeHandler}/>
    )
  }
}