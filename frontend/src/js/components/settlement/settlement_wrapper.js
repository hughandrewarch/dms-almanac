import React from "react"
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect"
import Settlement from "./settlement"
import PersonList from "../person/person_list"
import SettlementSelector from "../../selectors/SettlementSelector"

const mapStateToProps = (state, props) => {
    return SettlementSelector.select(state, props.match.params.settlementId)
}

class SettlementWrapper extends React.Component {
    static propTypes = {
        settlementId: PropTypes.number
    }

    render() {
        return(
            <div>
                <h2>Settlement</h2>
                <Settlement settlement={this.props.settlement}/>
                <h2>People</h2>
                <PersonList people={this.props.people}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(SettlementWrapper)
