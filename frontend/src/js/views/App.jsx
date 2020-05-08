import React from 'react'
import { Route, Switch, Router } from "react-router-dom"
import HomePage from "./home-page/HomePage"

export default class App extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
          <div>H E A D E R</div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/settlements">Settlements</Route>
            <Route>N O T   F O U N D</Route>
          </Switch>
      </Router>
    );
  }
}

