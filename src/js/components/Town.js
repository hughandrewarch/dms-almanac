import React from "react"
import * as Props from "../props"

export default class Town extends React.Component {
  static propTypes = {
    town: Props.TOWN.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      name: this.props.town.name
    }
  }

  render() {
    return(
      <div>
        {this.state.name}
      </div>
    )
  }
}