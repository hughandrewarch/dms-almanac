import React from "react"
import * as Props from "../../../props"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Settlements } from '../../../routes'
import NavList from "../../list/NavList"

export default class SettlementList extends React.Component {
  static propTypes = {
    settlements: PropTypes.arrayOf(Props.SETTLEMENT)
  }

  to(elementId) {
    return Settlements.show(elementId)
  }

  render() {
    return (
      <div>
        <NavList items={this.props.settlements} to={this.to}/>
      </div>
    )
  }
}

