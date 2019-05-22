import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/components/App.jsx'
import * as serviceWorker from './serviceWorker'
import { Provider } from "react-redux"
import store from "./js/store"
import Red from "./js/components/Red"
import Green from "./js/components/Green"
import Town from "./js/components/TownContainer"
import { Route, BrowserRouter as Router, Link } from "react-router-dom"


ReactDOM.render((
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li key={1}>
            <Link to="/">Home</Link>
          </li>
          <li key={2}>
            <Link to="/red/:id">Red</Link>
          </li>
          <li key={3}>
            <Link to="/green">Green</Link>
          </li>
          <li key={4}>
            <Link to="/town">town</Link>
          </li>
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/red" component={Red} />
        <Route path="/green" component={Green} />
        <Route path="/town/:id" render={props => {
          //TODO figure out how best to pass townId into Town
          console.log(props)
          return (<Town/>)
        }} />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
