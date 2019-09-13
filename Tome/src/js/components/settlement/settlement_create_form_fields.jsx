import React from 'react'
import PropTypes from 'prop-types'
import FormField from "../forms/form_field"

export default class SettlementCreateFormFields extends React.Component {
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
        population: {
          value: 0
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
      population: this.state.formControls.population.value,
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

  renderPopulationFormField() {
    return (
      <FormField name="population" label="population">
        <input
          type="number"
          name="population"
          value={this.state.formControls.population.value}
          onChange={this.changeHandler}/>
      </FormField>
    )
  }

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
        {this.renderPopulationFormField()}
        {this.renderDescriptionFormField()}
      </div>
    )
  }
}
