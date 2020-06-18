import React from 'react'
import PropTypes from 'prop-types'
import { PERSON } from 'js/constants'
import NumberFormField from "js/views/components/NumberFormField"
import TextFormField from "js/views/components/TextFormField"
import TextAreaFormField from "js/views/components/TextAreaFormField"
import SelectFormField from "js/views/components/SelectFormField"
import RaceSelect from "js/views/components/RaceSelect"
import SubRaceSelect from "js/views/components/SubRaceSelect"

export default class PersonCreateFormFields extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    showErrors: PropTypes.bool
  }

  constructor(props) {
    super(props)
    this.state = {
        name: { value: '' },
        description: { value: '' },
        race: { value: '' },
        subrace: { value: '' },
    }
  }

  onChange = () => {
    this.props.onChange({
      name: this.state.name,
      description: this.state.description,
      race: this.state.race,
      subrace: this.state.subrace
    })
  }

  changeHandler = event => {
    const name = event.target.name
    const value = event.target.value
    const errors = event.target.errors

    this.setState({
        [name]: {
          ...this.state[name],
          value: value,
          errors: errors
        }
    }, this.onChange)
  }

  showError(name) {
    return this.state[name].errors && this.props.showErrors
  }

  renderNameFormField() {
    let classError = this.showError("name") ? "t-error" : ""

    return (
        <TextFormField
          className={classError}
          name="name"
          value={this.state.name.value}
          onChange={this.changeHandler}
          isRequired
          />
    )
  }

  renderDescriptionFormField() {
    return (
        <TextAreaFormField
          name="description"
          value={this.state.description.value}
          onChange={this.changeHandler}/>
    )
  }

  renderRaceFormField() {
      return (
        <RaceSelect
            name="race"
            value={this.state.race.value}
            onChange={this.changeHandler}/>
      )
  }

  renderSubRaceFormField() {
      const { race, subrace } = this.state

      return (
          <SubRaceSelect
              name="subrace"
              race={race.value}
              value={subrace.value}
              onChange={this.changeHandler}/>
      )
}

  render() {
    return (
      <div>
        {this.renderNameFormField()}
        {this.renderDescriptionFormField()}
        {this.renderRaceFormField()}
        {this.renderSubRaceFormField()}
      </div>
    )
  }
}
