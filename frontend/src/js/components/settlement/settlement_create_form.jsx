import React from "react"
import connect from "react-redux/es/connect/connect"
import { createSettlement } from "../../actions"
import Button from "../buttons/button"
import SettlementCreateFormFields from "./settlement_create_form_fields"

//TODO is there any real reason for the separation between create form and form fields
// if form fields are not reusable
const mapDispatchToProps = (dispatch) => {

  return {
    createSettlement: (name, population, description) => {
      dispatch(createSettlement(name, population, description))
    }
  }
}

class SettlementCreateForm extends React.Component {

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

  handleSubmit = (event) => {
    this.props.createSettlement(
      this.state.name,
      this.state.population,
      this.state.description
    )
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <SettlementCreateFormFields onChange={this.handleChange}/>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(SettlementCreateForm)
