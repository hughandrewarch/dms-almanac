import React from "react"
import SettlementCreateForm from "../../components/settlement/settlement_create_form"
import PropTypes from "prop-types"

export default class CreateSettlement extends React.Component {
  static propTypes = {
    history: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.closeForms = this.closeForms.bind(this)
  }

  closeForms() {
    this.props.history.goBack()
  }

  render() {
    return (
      <SettlementCreateForm onSubmit={this.closeForms}/>
    )
  }
}
