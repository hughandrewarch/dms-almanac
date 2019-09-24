import React from 'react'
import PropTypes from "prop-types"
import Header from "../../components/header"

export default class Layout extends React.Component {
  static propTypes = {
    history: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <Header history={this.props.history}/>
        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}