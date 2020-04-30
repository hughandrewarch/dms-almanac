import React from "react"
import SettlementList from "./list/settlement_list"
import connect from "react-redux/es/connect/connect"

const mapStateToProps = (state, props) => {

  return {
    settlements: Object.values(state.settlements.byId)
  }
}

class SettlementListWrapper extends React.Component {

  renderSettlements() {
    return (
      <div>
        <SettlementList settlements={this.props.settlements}/>
      </div>
    )
  }

  render() {
    if (this.props.settlements != null) {
      return this.renderSettlements()
    } else {
      return null
    }
  }
}

export default connect(mapStateToProps)(SettlementListWrapper)
