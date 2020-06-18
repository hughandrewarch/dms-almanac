import React from "react"
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import SettlementActions from "js/actions/SettlementActions"
import NumberFormField from "js/views/components/NumberFormField"
import TextFormField from "js/views/components/TextFormField"
import TextAreaFormField from "js/views/components/TextAreaFormField"
import SelectFormField from "js/views/components/SelectFormField"
import SettlementTypeSelect from "js/views/components/SettlementTypeSelect"
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

  handleSubmit = () => {
    if(this.hasErrors()) {
        this.setState({showErrors: true})
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
    const { name, population, type } = this.state

    return name.errors || population.errors || type.errors
  }

  showError = (name) => {
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

  renderPopulationFormField() {
    let classError = this.showError("population") ? "t-error" : ""

    return (
        <NumberFormField
          className={classError}
          name="population"
          value={this.state.population.value}
          onChange={this.handleChange}
          isRequired
          nonNegative
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

  renderTypeFormField() {
    let classError = this.showError("type") ? "t-error" : ""

    return (
      <SettlementTypeSelect
        className={classError}
        name="type"
        value={this.state.type.value}
        onChange={this.handleChange}
        isRequired/>
    )
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
