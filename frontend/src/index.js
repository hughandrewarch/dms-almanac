import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/components/App.jsx'
import * as serviceWorker from './serviceWorker'
import { Provider } from "react-redux"
import store from "./js/store"
import Red from "./js/components/Red"
import Green from "./js/components/Green"
import { Route, Router } from "react-router-dom"
import './index.scss'
import CreateSettlementPage from "./js/pages/creators/create_settlement"
import history from './js/history'
import Layout from "./js/pages/layouts/layout"
import { PersonHook } from "./js/components/person/person_hooks"
import { SettlementHook } from "./js/components/settlement/settlement_hooks"

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <div>
        <h2>Almanac</h2>
        <Route exact path="/" render={props => {
          return (
            <Layout {...props}>
              <App/>
            </Layout>
          )
        }}/>
        <Route path="/red/:id" component={Red}/>
        <Route path="/green" component={Green}/>
        <Route path="/settlement/:settlementId" render={props => {
          return (
            <Layout {...props}>
              <SettlementHook settlementId={props.match.params.settlementId}/>
            </Layout>
          )
        }}/>
        <Route path="/person/:personId" render={props => {
          return (
            <Layout {...props}>
              <PersonHook personId={props.match.params.personId}/>
            </Layout>
          )
        }}/>
        <Route path="/creator/settlement" render={props => {
          return (
            <Layout {...props}>
              <CreateSettlementPage {...props}/>
            </Layout>
          )
        }}/>
      </div>
    </Router>
  </Provider>
), document.getElementById('root'))


//Generated
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
