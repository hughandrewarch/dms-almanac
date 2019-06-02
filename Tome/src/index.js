import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/components/App.jsx'
import * as serviceWorker from './serviceWorker'
import { Provider } from "react-redux"
import store from "./js/store"
import Red from "./js/components/Red"
import Green from "./js/components/Green"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import TownPage from "./js/components/town/TownPage"


ReactDOM.render((
  <Provider store={store}>
    <Router>
      <div>
        <h2>Almanac</h2>
        <ul>
          <li key={1}>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/red/:id" component={Red} />
        <Route path="/green" component={Green} />
        <Route path="/town/:townId" render={props => {
          return (<TownPage {...props}/>)
        }} />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'))


//Generated
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
