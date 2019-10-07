import React from "react"
import * as Props from "../../../props"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Settlements } from '../../../routes'

export default class SettlementList extends React.Component {
  static propTypes = {
    settlements: PropTypes.arrayOf(Props.SETTLEMENT)
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.settlements.map(el => (
          <li className="list-group-item"
              key={el.id}>
            <Link to={Settlements.show(el.id)}>{el.name}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

