import React from "react"
import { createSettlement } from "../../api/settlement"
import Button from "../buttons/button"
import SettlementCreateFormFields from "./settlement_create_form_fields"
import PropTypes from "prop-types"

//TODO is there any real reason for the separation between create form and form fields
// if form fields are not reusable
export default class SettlementCreateForm extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      population: 0,
      description: ''
    }
  }

  handleChange = (values) => {
    this.setState({
      name: values.name,
      population: values.population,
      description: values.description,
    })
  }

  handleSubmit = () => {
    createSettlement(
      this.state.name,
      this.state.population,
      this.state.description
    ).then(() => {
      this.props.onSubmit()
    })
  }

  handleCancel = () => {
    this.props.onCancel()
  }

  //Todo pass fields as props, don't save them as state
  render() {
    return (
      <div>
        <SettlementCreateFormFields onChange={this.handleChange}/>
        <Button onClick={this.handleSubmit}>Submit</Button>
        <Button onClick={this.handleCancel}>Cancel</Button>
      </div>
    )
  }
}
