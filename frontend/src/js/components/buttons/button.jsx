import React from "react"
import PropTypes from "prop-types"
import style from "./button.module.scss"

export default class Button extends React.Component {

  static propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    colour: PropTypes.oneOf(['red', 'green', 'blue', 'white'])
  }

  static defaultProps = {
    colour: 'blue',
  }

  render() {
    return (
      <button
        className={style.Button + ' ' + style[this.props.colour]}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    )
  }
}
