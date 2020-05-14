import React from "react"
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect"
import Settlement from "./settlement"
import SettlementsSelector from "../../selectors/SettlementsSelector"
import PeopleSelector from "../../selectors/PeopleSelector"

const mapStateToProps = (state, props) => {
    let settlementId = props.match.params.settlementId

    return {
        settlement: SettlementsSelector.select(state, settlementId),
        people: PeopleSelector.selectBySettlementId(state, settlementId)
    }
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
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(SettlementWrapper)
