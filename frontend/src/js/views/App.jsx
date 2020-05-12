import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from "react-router-dom"
import HomePage from "./home-page/HomePage"
import SettlementWrapper from "../components/settlement/settlement_wrapper"

class App extends React.Component {

    home() {
        this.props.history.push('/')
    }

    render() {
        return (
        <Router history={this.props.history}>
            <div onClick={this.home.bind(this)}>H E A D E R</div>
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

export default connect(null, null)(App)

