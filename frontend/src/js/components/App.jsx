import React from 'react'
import { SettlementListHook } from "./settlement/settlement_hooks"
import { fetchSettlements, fetchPeople, fetchRelations, fetchRelationTypes } from "../actions"
import connect from "react-redux/es/connect/connect"
import SettlementList from "./settlement/list/settlement_list"
import SettlementListWrapper from "./settlement/settlement_list_wrapper"
import PersonListWrapper from "./person/person_list_wrapper"

const mapStateToProps = (state, props) => {

  return {
    settlements: state.settlements,
    people: state.people,
    relations: state.relations,
    relationTypes: state.relationTypes,
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
    },
    fetchRelations: () => {
        dispatch(fetchRelations())
    },
    fetchRelationTypes: () => {
        dispatch(fetchRelationTypes())
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
            <div>FETCH</div>
            <div>
                <button onClick={this.props.fetchSettlements}>SET</button>
                <button onClick={this.props.fetchPeople}>PEO</button>
            </div>
            <div>
                <button onClick={this.props.fetchRelations}>REL</button>
                <button onClick={this.props.fetchRelationTypes}>RELT</button>
            </div>
            <button onClick={this.test}>TEST</button>
            <SettlementListWrapper/>
            <PersonListWrapper/>
          </div>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

