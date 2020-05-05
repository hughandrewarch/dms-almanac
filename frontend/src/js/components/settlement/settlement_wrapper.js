import React from "react"
import * as Props from "../../props"
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect"
import Settlement from "./settlement"
import PersonList from "../person/person_list"

const mapStateToProps = (state, props) => {

    var settlementPeople = state.settlements.byId[props.settlementId].people
    var people = []
    if(settlementPeople) {
        let peopleIds = Array.from(settlementPeople);

        people = peopleIds.map(personId => {
            return state.people.byId[personId]
        })
    }

    return {
      settlement: state.settlements.byId[props.settlementId],
      people: Object.values(people)
    }
}

class SettlementWrapper extends React.Component {
  static propTypes = {
    settlementId: PropTypes.number.isRequired
  }

  render() {
      return(
        <div>
          <h2>Settlement</h2>
          <Settlement settlement={this.props.settlement}/>
          <h2>People</h2>
          <PersonList people={this.props.people}/>
        </div>)
      }
}

export default connect(mapStateToProps, null)(SettlementWrapper)
