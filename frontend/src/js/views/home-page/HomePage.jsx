import React from 'react';
import { connect } from 'react-redux';
import { fetchSettlements, fetchPeople, fetchRelations, fetchRelationTypes } from "../../actions"

const mapStateToProps = (state, props) => {

    console.log("MSTP")
    console.log(state)

    return {
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

class HomePage extends React.Component {

    componentDidMount() {
        this.props.fetchSettlements()
        this.props.fetchPeople()
        this.props.fetchRelations()
        this.props.fetchRelationTypes()
    }

    render() {
        return (
            <div>HOME PAGE</div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
