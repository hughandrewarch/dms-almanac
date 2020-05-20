import React from 'react';
import { connect } from 'react-redux';
import PeopleSelector from "../../selectors/PeopleSelector"
import SettlementsSelector from "../../selectors/SettlementsSelector"
import SettlementTable from "../components/settlement/SettlementTable"

const mapStateToProps = (state, props) => {
    let personId = props.match.params.personId

    return {
        person: PeopleSelector.select(state, personId),
        settlements: SettlementsSelector.selectByPersonId(state, personId),
    }
}

class PersonPage extends React.Component {

    renderPerson() {
        if(this.props.person) {
            return(
                <div>{this.props.person.name}</div>
            )
        }
    }

    renderSettlements() {
        if(this.props.settlements) {
            return(
                <SettlementTable settlements={this.props.settlements}/>
            )
        }
    }

    render() {
        return(
            <div>
                <h2>Person</h2>
                <div>{this.renderPerson()}</div>
                <h2>Settlements</h2>
                <div>{this.renderSettlements()}</div>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(PersonPage);
