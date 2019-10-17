import React from "react"
import PropTypes from "prop-types"
import style from "../dropdowns/button_dropdown.module.scss"
import Button from "../buttons/button"

export default class ButtonDropdown extends React.Component {

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  static propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  renderChildren() {

    const children = React.Children.toArray(this.props.children).map((child) => {
      return React.cloneElement(child, {
        toggleDropdown: this.toggle,
        key: child.props.name
      })
    })

    if (this.state.dropdownOpen) {
      return (
        <div className={style.ButtonDropdownChildren}>
          {children}
        </div>
      )
    }
  }

  render() {
    return (
      <div className={style.ButtonDropdown}>
        <Button onClick={this.toggle}>
          {this.props.text ? this.props.text : ""}
        </Button>
        {this.renderChildren()}
      </div>
    )
  }
}
