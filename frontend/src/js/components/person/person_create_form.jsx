import React from "react"
import { createPerson } from "../../api/person"
import Button from "../buttons/button"
import PersonCreateFormFields from "./person_create_form_fields"
import PropTypes from "prop-types"

//TODO is there any real reason for the separation between create form and form fields
// if form fields are not reusable
export default class PersonCreateForm extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
  }

  handleChange = (values) => {
    this.setState({
      name: values.name,
      description: values.description,
    })
  }

  handleSubmit = () => {
    createPerson(
      this.state.name,
      this.state.description
    ).then(() => {
      this.props.onSubmit()
    })
  }

  handleCancel = () => {
    this.props.onCancel()
  }

  //TODO pass fields as props, don't save them as state
  render() {
    return (
      <div>
        <PersonCreateFormFields onChange={this.handleChange}/>
        <Button onClick={this.handleSubmit}>Submit</Button>
        <Button onClick={this.handleCancel}>Cancel</Button>
      </div>
    )
  }
}
