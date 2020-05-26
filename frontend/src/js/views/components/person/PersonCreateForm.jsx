import React from "react"
import { connect } from 'react-redux'
import PersonCreateFormFields from "js/views/components/person/PersonCreateFormFields"
import PropTypes from "prop-types"
import PersonApi from "js/api/PersonApi"
import PersonActions from "js/actions/PersonActions"

const mapDispatchToProps = (dispatch) => {
    return {
        create: (person) => {
            return dispatch(PersonActions.create(person))
        }
    }
}

class PersonCreateForm extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      race: 'HUMAN'
    }
  }

  handleChange = (values) => {
    this.setState({
      name: values.name,
      description: values.description,
    })
  }

  handleSubmit = () => {
    const { create, onSubmit } = this.props

    create(this.state)
        .then(onSubmit)
  }

  handleCancel = () => {
    this.props.onCancel()
  }

  render() {
    return (
      <div>
        <PersonCreateFormFields onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(PersonCreateForm)