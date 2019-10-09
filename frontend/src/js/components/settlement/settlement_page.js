import React from "react"
import { SettlementHook } from "./settlement_hooks"
import PropTypes from 'prop-types'

//TODO settlementId is very loosly coupled, component could break for semi random reasons
export default class SettlementPage extends React.Component {

  static propTypes = {
    settlementId: PropTypes.string.isRequired
  }


  render() {
    return (
      <SettlementHook settlementId={this.props.settlementId}/>
    )
  }
}
