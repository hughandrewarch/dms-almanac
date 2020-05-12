import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from "react-router-dom"
import Actions from "../actions"
import SettlementActions from "../actions/SettlementActions"
import HomePage from "./home-page/HomePage"
import SettlementWrapper from "../components/settlement/settlement_wrapper"

const mapStateToProps = (state, props) => {
    console.log(state)
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
            dispatch(Actions.fetchPeople())
        },
        fetchRelations: () => {
            dispatch(Actions.fetchRelations())
        },
        fetchRelationTypes: () => {
            dispatch(Actions.fetchRelationTypes())
        },
        request: () => {
            dispatch(Actions.request())
        }
    }
}

class App extends React.Component {

    componentDidMount() {
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
                <Route exact path="/settlements">Settlements</Route>
                <Route exact path="/settlement/:settlementId" component={SettlementWrapper}/>
                <Route>N O T   F O U N D</Route>
            </Switch>
        </Router>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

