import React from 'react'
import PropTypes from 'prop-types'
import ValidationUtil from 'js/utilities/ValidationUtil'

export default class InputFormField extends React.Component {
  //todo maybe pull validation out to form or form fields level?
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    validators: PropTypes.arrayOf(PropTypes.func),
  }

  constructor(props) {
      super(props)

      this.state = {
          value: props.value
      }
  }

  componentDidMount() {
    this.updateValue(this.state.value)
  }

  //TODO will be changed to return array of error enum
  validate(value) {
    return ValidationUtil.isValid(value, this.props.validators)
  }

  changeHandler = event => {
    this.updateValue(event.target.value)
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

  updateValue(value) {
    this.setState({
      value: value
    }, this.onChange)
  }

  render = () => {
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