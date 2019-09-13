import React from "react"
import * as Props from "../../props"

export default class Person extends React.Component {
  static propTypes = {
    person: Props.PERSON
  }

  renderPerson() {
    return (
      <div>
        <h3>{this.props.person.name}</h3>
        <div>
          {this.props.person.race}
        </div>
        <div>
          {this.props.person.description}
        </div>
      </div>
    )
  }

  render() {
    if (this.props.person != null) {
      return this.renderPerson()
    } else {
      return null
    }
  }
}