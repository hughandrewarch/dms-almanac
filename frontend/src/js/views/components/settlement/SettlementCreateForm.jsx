import React from "react"
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import SettlementActions from "js/actions/SettlementActions"
import NumberFormField from "js/views/components/NumberFormField"
import TextFormField from "js/views/components/TextFormField"
import { SETTLEMENT } from 'js/constants'
import capitalize from 'lodash/capitalize'

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
        name: { value: '' },
        population: { value: '0' },
        description: { value: '' },
        type: { value: '' },
        showErrors: false
    }
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
      })
  }

  handleSubmit = () => {
    if(this.hasErrors()) {
        this.setState({showErrors: true})
        console.log("name.hasErrors():", this.state.name.errors)
        console.log("population.hasErrors():", this.state.population.errors)
        console.log("type.hasErrors():", this.state.type.errors)

        return
    }

    const { create, onSubmit } = this.props
    const settlement = {
        name: this.state.name.value,
        population: this.state.population.value,
        description: this.state.description.value,
        type: this.state.type.value
    }
    create(settlement)
        .then(onSubmit)

  }

  hasErrors = () => {
    const { name, population, type } = this.state

    return name.errors || population.errors || type.errors
  }

  handleCancel = () => {
    this.props.onCancel()
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

  renderPopulationFormField() {
    let classError = this.showError("population") ? "t-error" : ""

    return (
        <NumberFormField
          className={classError}
          name="population"
          value={this.state.population.value}
          onChange={this.changeHandler}
          isRequired
          nonNegative
          />
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
    return this.state[name].errors && this.state.showErrors
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
