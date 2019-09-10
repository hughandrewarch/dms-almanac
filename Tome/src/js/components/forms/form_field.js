import React from 'react'
import PropTypes from 'prop-types'

export default class FormField extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
  }

  //todo try adding form field module scss like button

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
      <div className='form-field'>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        {children}
      </div>
    )
  }
}