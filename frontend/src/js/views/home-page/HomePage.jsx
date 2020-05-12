import React from 'react';
import { connect } from 'react-redux';
import Actions from "../../actions"
import SettlementSelector from "../../selectors/SettlementSelector"

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSettlements: () => {
        dispatch(Actions.fetchSettlements())
    },
    fetchPeople: () => {
        dispatch(Actions.fetchPeople())
    },
    fetchRelations: () => {
        dispatch(Actions.fetchRelations())
    },
    fetchRelationTypes: () => {
        dispatch(Actions.fetchRelationTypes())
    }
  }
}

class HomePage extends React.Component {

    componentDidMount() {
        this.props.fetchSettlements()
        this.props.fetchPeople()
        this.props.fetchRelationTypes()
        this.props.fetchRelations()
    }

    test3() {
        this.props.history.push('/settlement/2')
    }

    render() {
        return (
        <div>
            <div>HOME PAGE</div>
            <button onClick={this.test3.bind(this)}>Settlement 2</button>
        </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(HomePage)
