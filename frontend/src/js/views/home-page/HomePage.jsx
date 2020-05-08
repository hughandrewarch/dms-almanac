import React from 'react';
import { connect } from 'react-redux';
import Actions from "../../actions"
const mapStateToProps = (state, props) => {

    return {
    }
}

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
