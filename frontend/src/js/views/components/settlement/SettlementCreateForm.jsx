import React from "react"
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import SettlementActions from "js/actions/SettlementActions"
import { SETTLEMENT } from 'js/constants'
import capitalize from 'lodash/capitalize'
import ValidationUtil, { VALIDATORS as v } from 'js/utilities/ValidationUtil'

//TODO is there any real reason for the separation between create form and form fields
// if form fields are not reusable
const mapDispatchToProps = (dispatch) => {
    return {
        create: (settlement) => {
            return dispatch(SettlementActions.create(settlement))
        }
    }
}

class SettlementCreateForm extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
        name: { value: '', isValid: false, validators: [v.REQUIRED] },
        population: { value: 0, isValid: true, validators: [v.NON_NEGATIVE, v.REQUIRED] },
        description: { value: '', isValid: true, validators: [] },
        type: { value: '', isValid: false, validators: [v.REQUIRED] },
        submitClicked: false
    }
  }

  changeHandler = event => {
      const name = event.target.name
      const value = event.target.value

      this.setState({
        [name]: {
          ...this.state[name],
          value: value
        }
      }, this.validate(name))
  }

  handleSubmit = () => {
    const { create, onSubmit } = this.props

    const settlement = {
        name: this.state.name.value,
        population: this.state.population.value,
        description: this.state.description.value,
        type: this.state.type.value
    }

    if(this.isValid()) {
        create(settlement)
            .then(onSubmit)
    }

    this.setState({submitClicked: true})
  }

  //TODO push down into form field components
  validate(name) {
    return () => {
        const { value, validators } = this.state[name]

        let isValid = ValidationUtil.validate(value, validators)

        this.setState({[name]: { ...this.state[name], isValid: isValid }})
    }
  }

  isValid = () => {
    const { name, population, type } = this.state

    return name.isValid && population.isValid && type.isValid
  }

  handleCancel = () => {
    this.props.onCancel()
  }

  renderNameFormField() {
    let classError = this.showError("name") ? "t-error" : ""

    return (
        <input
          className={classError}
          type="text"
          name="name"
          value={this.state.name.value}
          onChange={this.changeHandler}/>
    )
  }

  renderPopulationFormField() {
    let classError = this.showError("population") ? "t-error" : ""

    return (
        <input
          className={classError}
          type="number"
          name="population"
          value={this.state.population.value}
          onChange={this.changeHandler}/>
    )
  }

  renderDescriptionFormField() {
    let classError = this.showError("description") ? "t-error" : ""

    return (
        <textarea
          className={classError}
          name="description"
          value={this.state.description.value}
          onChange={this.changeHandler}/>
    )
  }

  renderTypeFormField() {
    let classError = this.showError("type") ? "t-error" : ""

    return (
      <select className={classError} name="type" onChange={this.changeHandler}>
        <option default value=""></option>
        {SETTLEMENT.TYPE.map(type => (
          <option key={type} value={type}>{capitalize(type)}</option>
        ))}
      </select>
    )
  }

  showError = (name) => {
    return !this.state[name].isValid && this.state.submitClicked
  }

  render() {

    return (
      <div>
        {this.renderNameFormField()}
        {this.renderPopulationFormField()}
        {this.renderDescriptionFormField()}
        {this.renderTypeFormField()}
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(SettlementCreateForm)
