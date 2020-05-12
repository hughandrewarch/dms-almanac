import React from 'react';
import { connect } from 'react-redux';
import Actions from "../../actions"
import SettlementSelector from "../../selectors/SettlementSelector"

const mapStateToProps = (state, props) => {

    return state
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
        this.props.fetchRelationTypes()
        this.props.fetchRelations()

        this.test1 = this.test1.bind(this);
        this.test2 = this.test2.bind(this);
    }

    test1() {
        console.log("HELLO")
        console.log(this.props)
        console.log("GOODBYE")
    }
    test2() {
        console.log(SettlementSelector.select(this.props, 2))
    }

    render() {
        return (
        <div>
            <div>HOME PAGE</div>
            <button onClick={this.test1}>Test 1</button>
            <button onClick={this.test2}>Test 2</button>
        </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
