import React from 'react'
import Header from "../../components/header"

export default class Layout extends React.Component {
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