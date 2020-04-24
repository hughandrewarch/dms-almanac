import React from "react"
import PersonCreateForm from "../../components/person/person_create_form"

export default class CreatePersonPage extends React.Component {

  constructor(props) {
    super(props)

    this.return = this.return.bind(this)
  }

  return() {
    this.props.history.goBack()
  }

  render() {
    return (
      <PersonCreateForm
        onSubmit={this.return}
        onCancel={this.return}
      />
    )
  }
}
