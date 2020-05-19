import React from 'react';
import { connect } from 'react-redux';
import SettlementsSelector from "../../selectors/SettlementsSelector"
import PeopleSelector from "../../selectors/PeopleSelector"

const mapStateToProps = (state, props) => {
    let settlementId = props.match.params.settlementId

    return {
        settlement: SettlementsSelector.select(state, settlementId),
        people: PeopleSelector.selectBySettlementId(state, settlementId),
    }
}

class SettlementPage extends React.Component {

    renderSettlement() {
        if(this.props.settlement) {
            return(
                <div>{this.props.settlement.name}</div>
            )
        }
    }

    renderPeople() {
        if(this.props.people) {
            return(
                <div>
                    {this.props.people.map(person => (
                        <div key={person.id}>{person.name}</div>
                    ))}
                </div>
            )
        }
    }

    render() {
        return(
            <div>
                <h2>Settlement</h2>
                <div>{this.renderSettlement()}</div>
                <h2>People</h2>
                <div>{this.renderPeople()}</div>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(SettlementPage);
