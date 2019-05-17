import React from "react"
import * as Props from "../props"

export default class Town extends React.Component {
  static propTypes = {
    town: Props.TOWN.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        {this.props.town.name}
      </div>
    )
  }
}