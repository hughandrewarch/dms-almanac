import React from "react"
import SettlementCreateForm from "../../components/settlement/settlement_create_form"

export default class CreateSettlementPage extends React.Component {

  constructor(props) {
    super(props)

    this.return = this.return.bind(this)
  }

  return() {
    this.props.history.goBack()
  }

  render() {
    return (
      <SettlementCreateForm
        onSubmit={this.return}
        onCancel={this.return}
      />
    )
  }
}
