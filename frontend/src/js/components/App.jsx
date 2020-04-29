import React from 'react'
import { SettlementListHook } from "./settlement/settlement_hooks"
import { fetchSettlements } from "../actions"
import connect from "react-redux/es/connect/connect"
import DrewTest from "./drew"

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchSettlements: () => {
      dispatch(fetchSettlements())
    }
  }
}

class App extends React.Component {

  test() {
    this.props.fetchSettlements()
  }

  render() {
      return (
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <h2>Settlements Go Here</h2>
            <SettlementListHook/>
            <DrewTest/>
            <button onClick={this.props.fetchSettlements}>FETCH</button>
          </div>
        </div>
      )
  }
}


export default connect(
  null,
  mapDispatchToProps
)(App)

