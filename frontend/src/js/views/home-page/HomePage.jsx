import React from 'react';
import { connect } from 'react-redux';
import { fetchSettlements, fetchPeople, fetchRelations, fetchRelationTypes, fetchSettlementsNew } from "../../actions"

const mapStateToProps = (state, props) => {

    console.log("MSTP")
    console.log(state)
    return {
//       isRequesting: selectRequesting(state, [ShowsAction.REQUEST_SHOW, ShowsAction.REQUEST_CAST]),
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSettlements: () => {
        dispatch(fetchSettlementsNew())
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

//     constructor() {
//         this.test = this.test.bind(this)
//     }

//     test() {
//         console.log(this.props)
//     }

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
