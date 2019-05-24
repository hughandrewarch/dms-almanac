import React from "react"
import * as Props from "../props"

export default class Town extends React.Component {
  static propTypes = {
    town: Props.TOWN
  }

  renderTown() {
    return (
      <div>
        <div>
          {this.props.town.name}
        </div>
        <div>
          {this.props.town.population}
        </div>
      </div>
    )
  }

  render() {
    if (this.props.town != null) {
      return this.renderTown()
    } else {
      return null
    }
  }
}