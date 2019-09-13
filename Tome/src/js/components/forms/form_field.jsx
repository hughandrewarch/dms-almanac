import React from 'react'
import PropTypes from 'prop-types'
import style from './form_field.module.scss'

export default class FormField extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
  }

  render = () => {
    let children = React.Children.map(this.props.children, (child) => {
      if (!React.isValidElement(child)) {
        return child
      } else if (child.props.name) {
        return React.cloneElement(child)
      } else {
        return React.cloneElement(child, {name: this.props.name})
      }
    })

    return (
      <div className={style.FormField}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        {children}
      </div>
    )
  }
}