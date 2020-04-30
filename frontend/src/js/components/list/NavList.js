import React from "react"
import * as Props from "../../props"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default class NavList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(Props.SETTLEMENT),
    to: PropTypes.func,
  }

  to(elementId) {
    return this.props.to(elementId)
  }

  render() {
    if(this.props.items){
    return (
      <ul className="list-group list-group-flush">
        {this.props.items.map(el => (
          <li className="list-group-item"
              key={el.id}>
            <Link to={this.to(el.id)}>{el.name}</Link>
          </li>
        ))}
      </ul>
    )
  } else {
    return (
    <div>OOP</div>
    )
  }
  }
}
