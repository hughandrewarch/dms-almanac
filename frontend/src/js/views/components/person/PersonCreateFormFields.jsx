import React from 'react'
import PropTypes from 'prop-types'
import { PERSON } from 'js/constants'

export default class PersonCreateFormFields extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
        name: '',
        description: ''
    }
  }

  onChange = () => {
    this.props.onChange({
      name: this.state.name,
      description: this.state.description,
      race: this.state.race
    })
  }

  changeHandler = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
        [name]: value
    }, this.onChange)
  }

  renderNameFormField() {
    return (
      <input
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.changeHandler}/>
    )
  }

  renderDescriptionFormField() {
    return (
      <textarea
        name="description"
        value={this.state.description}
        onChange={this.changeHandler}/>
    )
  }

  renderRaceFormField() {
    return (
      <select name="race" onChange={this.changeHandler}>
        <option default value=""></option>
        {Object.values(PERSON.RACE).map(race => (
          <option key={race.key} value={race.key}>{race.name}</option>
        ))}
      </select>
    )
  }

  renderSubRaceFormField() {
    const { race } = this.state

    if(race) {
      if(PERSON.RACE[race].SUBRACE) {
        return (
          <select name="sub_race" onChange={this.changeHandler}>
            <option default value=""></option>
            {PERSON.RACE[race].SUBRACE.map(subrace => (
              <option key={subrace.key} value={subrace.key}>{subrace.name}</option>
            ))}
          </select>
        )
      }
    }
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
