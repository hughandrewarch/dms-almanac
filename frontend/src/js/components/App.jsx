import React from 'react'
import { SettlementListHook } from "./settlement/settlement_hooks"
import { fetchSettlements, fetchPeople } from "../actions"
import connect from "react-redux/es/connect/connect"
import SettlementList from "./settlement/list/settlement_list"
import SettlementListWrapper from "./settlement/settlement_list_wrapper"
import PersonListWrapper from "./person/person_list_wrapper"

const mapStateToProps = (state, props) => {

    console.log("map state to props")
    console.log(state)

  return {
    people: state.people,
    settlements: state.settlements,
    settlementsList: state.settlementsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSettlements: () => {
      dispatch(fetchSettlements())
    },
    fetchPeople: () => {
      dispatch(fetchPeople())
    }
  }
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.test = this.test.bind(this)
    }

  test() {
    console.log(this.props)
  }

  render() {
    return (
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <h2>Settlements Go Here</h2>
            <button onClick={this.props.fetchSettlements}>FETCH SET</button>
            <button onClick={this.props.fetchPeople}>FETCH PEO</button>
            <button onClick={this.test}>TEST</button>
            <SettlementListWrapper/>
            <PersonListWrapper/>
          </div>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

