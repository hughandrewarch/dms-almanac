import React from "react"
import { connect } from 'react-redux'
import PersonCreateFormFields from "js/views/components/person/PersonCreateFormFields"
import PropTypes from "prop-types"
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
    }
  }

  handleChange = (values) => {
    this.setState({
      name: values.name,
      description: values.description,
      race: values.race,
    })
  }

  handleSubmit = () => {
    const { create, onSubmit } = this.props

    create(this.state)
        .then(onSubmit)
  }

  handleCancel = () => {
    console.log(this.state)
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