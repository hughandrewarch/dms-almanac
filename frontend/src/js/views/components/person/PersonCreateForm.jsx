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
      subrace: values.subrace,
    })
  }

  hasErrors = () => {
    const { name, description, race } = this.state

    return name.errors || description.errors || race.errors
  }

  handleSubmit = () => {

    if(this.hasErrors()) {
        this.setState({showErrors: true})
        return
    }

    const { create, onSubmit } = this.props
    const person = {
        name: this.state.name.value,
        description: this.state.description.value,
        race: this.state.race.value
    }

    create(person)
        .then(onSubmit)
  }

  handleCancel = () => {
    this.props.onCancel()
  }

  render() {
    return (
      <div>
        <PersonCreateFormFields onChange={this.handleChange} showErrors={this.state.showErrors}/>
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(PersonCreateForm)