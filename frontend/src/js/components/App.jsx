import React from 'react'
import { SettlementListHook } from "./settlement/settlement_hooks"
import { fetchSettlements, fetchPeople, fetchRelations, fetchRelationTypes } from "../actions"
import connect from "react-redux/es/connect/connect"
import SettlementList from "./settlement/list/settlement_list"
import SettlementWrapper from "./settlement/settlement_wrapper"
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

        this.test1 = this.test1.bind(this)
        this.test2 = this.test2.bind(this)
        this.renderSettlement = this.renderSettlement.bind(this)

        this.state = {testId:0};
    }

    test1() {
        this.setState({testId: 1});
    }

    test2() {
        this.setState({testId: 2});
    }

    renderSettlement() {
        if(this.state.testId > 0) {
            return(
                <SettlementWrapper settlementId={this.state.testId}/>
            )
          }
    }

  render() {
    return (
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <div>FETCH</div>
            <div>
                <button onClick={this.props.fetchSettlements}>SET</button>
                <button onClick={this.props.fetchPeople}>PEO</button>
            </div>
            <div>
                <button onClick={this.props.fetchRelations}>REL</button>
                <button onClick={this.props.fetchRelationTypes}>RELT</button>
            </div>
            <button onClick={this.test1}>TEST 1</button>
            <button onClick={this.test2}>TEST 2</button>
            <div>SETTLEMENT LIST</div>
            <SettlementListWrapper/>
            <div>SETTLEMENT</div>
            {this.renderSettlement()}
          </div>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

