import React, { Component } from "react"
import { connect } from "react-redux"
import Town from "./Town"

export const mapStateToProps = (state) => {
  return { town: state.town }
}

class TownContainer extends Component {

  renderTown() {
    if (this.props.town) {
      return (
        <Town town={this.props.town}/>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      this.renderTown()
    )
  }
}

const _Town_ = connect(mapStateToProps, null)(TownContainer)

export default _Town_

