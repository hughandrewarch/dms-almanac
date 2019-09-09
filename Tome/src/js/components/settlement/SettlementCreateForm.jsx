import React from "react"
import connect from "react-redux/es/connect/connect"
import { createSettlement } from "../../actions"
import Button from "../buttons/button"
import CreateSettlementFormFields from "./create_settlement_form_fields"


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
        <CreateSettlementFormFields onChange={this.handleChange}/>

        <Button onClick={this.handleSubmit}>Submit 1</Button>
        <Button onClick={this.handleSubmit} colour={'red'}>Submit 2</Button>
        <Button onClick={this.handleSubmit} colour={'green'}>Submit 3</Button>
        <Button onClick={this.handleSubmit} colour={'blue'} disabled={true}>Submit 4</Button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(SettlementCreateForm)
