import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from "react-router-dom"
import Actions from "../actions"
import SettlementActions from "../actions/SettlementActions"
import PersonActions from "../actions/PersonActions"
import RelationActions from "../actions/RelationActions"
import RelationTypeActions from "../actions/RelationTypeActions"
import HomePage from "./home-page/HomePage"
import SettlementPage from "./settlement-page/SettlementPage"
import PersonPage from "./person-page/PersonPage"
import CreateSettlementPage from "./create-settlement-page/CreateSettlementPage"

const mapStateToProps = (state, props) => {
    return {
        isRequesting: state.isRequesting
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSettlements: () => {
            dispatch(SettlementActions.fetchSettlements())
        },
        fetchPeople: () => {
            dispatch(PersonActions.fetchPeople())
        },
        fetchRelations: () => {
            dispatch(RelationActions.fetchRelations())
        },
        fetchRelationTypes: () => {
            dispatch(RelationTypeActions.fetchRelationTypes())
        },
        request: () => {
            dispatch(Actions.request())
        }
    }
}

class App extends React.Component {

    componentDidMount() {
        //Todo look into thunk to chain things properly
        this.props.fetchSettlements()
        this.props.fetchPeople()
        this.props.fetchRelationTypes()
        this.props.fetchRelations()
    }

    home() {
        this.props.history.push('/')
    }

    renderRequesting() {
        if(this.props.isRequesting) {
            return(
                <div>L O A D I N G</div>
            )
        }
    }

    render() {
        return (
        <Router history={this.props.history}>
            <div onClick={this.home.bind(this)}>H E A D E R</div>
            {this.renderRequesting()}
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/settlement/:settlementId" component={SettlementPage}/>
                <Route exact path="/person/:personId" component={PersonPage}/>
                <Route exact path="/create" component={CreateSettlementPage}/>
                <Route>N O T   F O U N D</Route>
            </Switch>
        </Router>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

