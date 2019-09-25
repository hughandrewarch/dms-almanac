import React from "react"
import connect from "react-redux/es/connect/connect"
import { createSettlement } from "../../actions"
import Button from "../buttons/button"
import SettlementCreateFormFields from "./settlement_create_form_fields"
import PropTypes from "prop-types"

//TODO is there any real reason for the separation between create form and form fields
// if form fields are not reusable
const mapDispatchToProps = (dispatch) => {

  return {
    createSettlement: (name, population, description) => {
      return dispatch(createSettlement(name, population, description))
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

  //TODO find way to properly chain calls so that i can add loading spinner then act on success/failure
  handleSubmit = () => {
    this.props.createSettlement(
      this.state.name,
      this.state.population,
      this.state.description
    ).then(() => {
      this.props.onSubmit()
    })

    // this.props.test().then(() => {
    //   this.props.onSubmit()
    // })
  }

  handleCancel = () => {
    this.props.onCancel()
  }

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

export default connect(null, mapDispatchToProps)(SettlementCreateForm)
