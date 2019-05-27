import React from "react"
import * as Props from "../../../props"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Towns } from '../../../routes'

export default class TownList extends React.Component {
  static propTypes = {
    towns: PropTypes.arrayOf(Props.TOWN),
    selectTown: PropTypes.func,
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.towns.map(el => (
          <li className="list-group-item"
              key={el.id}>
            <Link to={Towns.show(el.id)}>{el.name}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

