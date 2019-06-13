import React from "react"
import * as Props from "../../props"

export default class Settlement extends React.Component {
  static propTypes = {
    settlement: Props.SETTLEMENT
  }

  renderSettlement() {
    return (
      <div>
        <div>
          {this.props.settlement.name}
        </div>
        <div>
          {this.props.settlement.population}
        </div>
        <div>
          {this.props.settlement.description}
        </div>
      </div>
    )
  }

  render() {
    if (this.props.settlement != null) {
      return this.renderSettlement()
    } else {
      return null
    }
  }
}