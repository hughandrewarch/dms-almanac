import React from "react"
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect"
import Person from "./person"
import SettlementList from "../settlement/list/settlement_list"
import SettlementsSelector from "../../selectors/SettlementsSelector"
import PeopleSelector from "../../selectors/PeopleSelector"

const mapStateToProps = (state, props) => {
    let personId = props.match.params.personId

    return {
        person: PeopleSelector.select(state, personId),
        settlements: SettlementsSelector.selectByPersonId(state, personId)
    }
}

class PersonWrapper extends React.Component {
    static propTypes = {
        settlementId: PropTypes.number
    }

    render() {
        return(
            <div>
                <h2>Person</h2>
                <Person person={this.props.person}/>
                <h2>Settlements</h2>
                <SettlementList settlements={this.props.people}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(PersonWrapper)
