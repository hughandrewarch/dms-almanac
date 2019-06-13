import React from "react"
import * as Props from "../../props"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default class NavList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(Props.SETTLEMENT),
    onSelectLink: PropTypes.func,
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.items.map(el => (
          <li className="list-group-item"
              key={el.id}>
            <Link to={this.props.onSelectLink(el.id)}>{el.name}</Link>
          </li>
        ))}
      </ul>
    )
  }
}
