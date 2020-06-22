import React from "react"
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import PersonActions from "js/actions/PersonActions"
import TextFormField from "js/views/components/TextFormField"
import TextAreaFormField from "js/views/components/TextAreaFormField"
import RaceSelect from "js/views/components/RaceSelect"
import SubRaceSelect from "js/views/components/SubRaceSelect"

const mapDispatchToProps = (dispatch) => {
    return {
        create: (person) => {
            return dispatch(PersonActions.create(person))
        }
    }
}

class PersonCreateForm extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
        name: { value: '' },
        description: { value: '' },
        race: { value: '' },
        subrace: { value: '' }
    }
  }

  handleSubmit = () => {

    if(this.hasErrors()) {
        this.setState({showErrors: true})
        return
    }

    const { create, onSubmit } = this.props
    const person = {
        name: this.state.name.value,
        description: this.state.description.value,
        race: this.state.race.value
    }

    create(person)
        .then(onSubmit)
  }

  handleCancel = () => {
    this.props.onCancel()
  }

  handleChange = event => {
      const name = event.target.name
      const value = event.target.value
      const errors = event.target.errors

      this.setState({
        [name]: {
          ...this.state[name],
          value: value,
          errors: errors
        }
      })
  }

  hasErrors = () => {
    const { name, description, race } = this.state

    return name.errors || description.errors || race.errors
  }

  showError(name) {
    return this.state[name].errors && this.state.showErrors
  }

  renderNameFormField() {
    let classError = this.showError("name") ? "t-error" : ""

    return (
        <TextFormField
          className={classError}
          name="name"
          value={this.state.name.value}
          onChange={this.handleChange}
          isRequired
          />
    )
  }

  renderDescriptionFormField() {
    return (
        <TextAreaFormField
          name="description"
          value={this.state.description.value}
          onChange={this.handleChange}/>
    )
  }

  renderRaceFormField() {
      return (
        <RaceSelect
            name="race"
            value={this.state.race.value}
            onChange={this.handleChange}/>
      )
  }

  renderSubRaceFormField() {
      const { race, subrace } = this.state

      return (
          <SubRaceSelect
              name="subrace"
              race={race.value}
              value={subrace.value}
              onChange={this.handleChange}/>
      )
  }

  //TODO consider splitting when setting up css
  //     it might be cleaner to have the manipulation
  //     split from the display
  render() {
    return (
      <div>
        {this.renderNameFormField()}
        {this.renderDescriptionFormField()}
        {this.renderRaceFormField()}
        {this.renderSubRaceFormField()}
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(PersonCreateForm)