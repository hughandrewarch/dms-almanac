import React from 'react'
import PropTypes from 'prop-types'
import FormField from "../forms/form_field"

export default class PersonCreateFormFields extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      formControls: {
        name: {
          value: ''
        },
        description: {
          value: ''
        }
      }
    }
  }

  onChange = () => {
    this.props.onChange({
      name: this.state.formControls.name.value,
      description: this.state.formControls.description.value,
    })
  }

  changeHandler = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    }, () => this.onChange())
  }

  renderNameFormField() {
    return (
      <FormField name="name" label="name">
        <input
          type="text"
          name="name"
          value={this.state.formControls.name.value}
          onChange={this.changeHandler}/>
      </FormField>
    )
  }

  //todo pull out form fields?
  renderDescriptionFormField() {
    return (
      <FormField name="description" label="description">
        <textarea
          name="description"
          value={this.state.formControls.description.value}
          onChange={this.changeHandler}/>
      </FormField>
    )
  }

  render() {
    return (
      <div>
        {this.renderNameFormField()}
        {this.renderDescriptionFormField()}
      </div>
    )
  }
}
