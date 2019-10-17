import React from "react"
import PropTypes from "prop-types"
import Button from "../buttons/button"

export default class DropdownItem extends React.Component {

  static propTypes = {
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onClick: PropTypes.func,
    toggleDropdown: PropTypes.func
  }

  static defaultProps = {
    disabled: false
  }

  onClick = () => {
    this.props.onClick()
    this.props.toggleDropdown()
  }

  render() {
    return (
      <Button
        colour='white'
        disabled={this.props.disabled}
        onClick={this.onClick}
      >
        {this.props.children}
      </Button>
    )
  }
}
