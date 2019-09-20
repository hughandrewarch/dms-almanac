import React from "react"
import ButtonDropdown from "../components/buttons/button_dropdown"
import DropdownItem from "../components/buttons/dropdown_item"
import SettlementCreateForm from "../components/settlement/settlement_create_form"

const forms = {
  SETTLEMENT: 'settlement'
}

//TODO figure out structure,
// - creators in different urls/pages with dropdown navigating
export default class CreatePage extends React.Component {

  constructor(props) {
    super(props)
    this.onClickSettlement = this.onClickSettlement.bind(this)
    this.closeForms = this.closeForms.bind(this)
    this.state = {
      activeForm: null
    }
  }

  closeForms() {
    this.setState({
      activeForm: null
    })
  }

  onClickSettlement() {
    this.setState({
      activeForm: forms.SETTLEMENT
    })
  }

  renderSettlementForm() {
    return (
      <SettlementCreateForm onSubmit={this.closeForms}/>
    )
  }

  renderActiveForm() {
    switch (this.state.activeForm) {
      case forms.SETTLEMENT:
        return this.renderSettlementForm()
      default:
    }
  }

  render() {
    return (
      <div>
        <ButtonDropdown text='Create'>
          <DropdownItem onClick={this.onClickSettlement} name='settlement'>Settlement</DropdownItem>
        </ButtonDropdown>
        {this.renderActiveForm()}
      </div>
    )
  }
}
