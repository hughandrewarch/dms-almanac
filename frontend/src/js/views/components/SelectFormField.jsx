import React from 'react'
import PropTypes from 'prop-types'
import ValidationUtil from 'js/utilities/ValidationUtil'
import capitalize from 'lodash/capitalize'

export default class SelectFormField extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
    validators: PropTypes.arrayOf(PropTypes.func)
  }

  constructor(props) {
      super(props)

      this.validators = this.props.validators ? this.props.validators : []

      this.state = {
          value: props.value,
          options: this.props.options ? this.props.options : []
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
      <select {...this.props}
        name={this.props.name}
        onChange={this.changeHandler}>
            <option default value=""></option>
            {this.state.options.map(type => (
              <option key={type} value={type}>{capitalize(type)}</option>
            ))}
      </select>
    )
  }
}
