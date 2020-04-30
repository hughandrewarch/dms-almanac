import React from 'react'
import { SettlementListHook } from "./settlement/settlement_hooks"
import { fetchSettlements } from "../actions"
import connect from "react-redux/es/connect/connect"
import SettlementList from "./settlement/list/settlement_list"
import SettlementListWrapper from "./settlement/settlement_list_wrapper"

const mapStateToProps = (state, props) => {

  return {
    settlements: state.settlements,
    settlementsList: state.settlementsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSettlements: () => {
      dispatch(fetchSettlements())
    }
  }
}

class App extends React.Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <h2>Settlements Go Here</h2>
            <button onClick={this.props.fetchSettlements}>FETCH</button>
            <button onClick={this.test}>TEST</button>
            <SettlementListWrapper/>
          </div>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

