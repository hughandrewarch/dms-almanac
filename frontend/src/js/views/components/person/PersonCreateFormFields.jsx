import React from 'react'
import PropTypes from 'prop-types'

export default class PersonCreateFormFields extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
        name: '',
        description: ''
    }
  }

  onChange = () => {
    this.props.onChange({
      name: this.state.name,
      description: this.state.description,
    })
  }

  changeHandler = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
        [name]: value
    }, this.onChange())
  }

  renderNameFormField() {
    return (
      <input
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.changeHandler}/>
    )
  }

  renderDescriptionFormField() {
    return (
      <textarea
        name="description"
        value={this.state.description}
        onChange={this.changeHandler}/>
    )
  }

  render() {
    return (
      <div>
        {this.renderNameFormField()}
        {this.renderDescriptionFormField()}
      </div>
    )
  }
}
