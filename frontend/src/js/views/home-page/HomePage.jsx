import React from 'react';
import { connect } from 'react-redux';
import PeopleSelector from "../../selectors/PeopleSelector"
import SettlementsSelector from "../../selectors/SettlementsSelector"
import PersonTable from "../components/person/PersonTable"
import SettlementTable from "../components/settlement/SettlementTable"

const mapStateToProps = (state, props) => {
    return {
        settlements: SettlementsSelector.selectAll(state),
        people: PeopleSelector.selectAll(state)
    }
}

class HomePage extends React.Component {

    renderSettlements() {
        const { settlements, history } = this.props

        if(this.props.settlements) {
            return(
                <SettlementTable settlements={settlements} history={history} />
            )
        }
    }

    renderPeople() {
        const { people, history } = this.props

        if(this.props.people) {
            return(
                <PersonTable people={people} history={history}/>
            )
        }
    }

    render() {
        return (
            <div>
                <div>HOME PAGE</div>
                <h2>Settlements</h2>
                <div>{this.renderSettlements()}</div>
                <h2>People</h2>
                <div>{this.renderPeople()}</div>
            </div>)
    }
}

//Will be connecting later
export default connect(mapStateToProps, null)(HomePage)
