import React from 'react'
import PropTypes from 'prop-types'
import ButtonDropdown from "./buttons/button_dropdown"
import DropdownItem from "./buttons/dropdown_item"
import { Link } from "react-router-dom"

const forms = {
  SETTLEMENT: 'settlement'
}

export default class Header extends React.Component {

  static propTypes = {
    history: PropTypes.func.isRequired,
  }

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
        return this.props.history.push('/creators/settlement')
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