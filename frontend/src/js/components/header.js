import React from 'react'
import ButtonDropdown from "./dropdowns/button_dropdown"
import DropdownItem from "./dropdowns/dropdown_item"
import { Link } from "react-router-dom"

const forms = {
  SETTLEMENT: 'settlement'
}

export default class Header extends React.Component {

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

  route(form) {
    switch (form) {
      case forms.SETTLEMENT:
        return this.props.history.push('/creator/settlement')
      default:
    }
  }

  onClickSettlement() {
    this.route(forms.SETTLEMENT)
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <div>
          <ButtonDropdown text='Create'>
            <DropdownItem onClick={this.onClickSettlement} name='settlement'>Settlement</DropdownItem>
          </ButtonDropdown>
        </div>
      </div>
    )
  }
}