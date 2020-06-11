import React from "react"
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import SettlementActions from "js/actions/SettlementActions"
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
        name: { value: '', error: false },
        population: { value: 0, error: false },
        description: { value: '', error: false },
        type: { value: '', error: false },
        submitClicked: false
    }
  }

  changeHandler = event => {
      const name = event.target.name
      const value = event.target.value

      this.setState({
          [name]: { value: value, error: false }
      }, this.validate)
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

  //TODO pull out to validation util
  validate = () => {
    const { name, population, type } = this.state

    if(name.value == ""){
        this.setState({name: { error: true }})
    }
    if(population.value < 0){
        this.setState({population: { error: true }})
    }
    if(type.value == ""){
        this.setState({type: { error: true }})
    }
  }

  isValid = () => {
    const { name, population, type } = this.state

    return !name.error && !population.error && !type.error
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
    return this.state[name].error && this.state.submitClicked
//     return false
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
