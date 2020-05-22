import React from 'react'
import PropTypes from 'prop-types'

export default class SettlementCreateFormFields extends React.Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            name:  '',
            population:  0,
            description:  ''
        }
    }

    onChange = () => {
        this.props.onChange({
            name: this.state.name,
            population: this.state.population,
            description: this.state.description,
        })
    }

    changeHandler = event => {
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name]: value
        }, () => this.onChange())
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

  renderPopulationFormField() {
    return (
        <input
          type="number"
          name="population"
          value={this.state.population}
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
        {this.renderPopulationFormField()}
        {this.renderDescriptionFormField()}
      </div>
    )
  }
}
