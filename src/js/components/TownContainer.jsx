import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchTown as _fetchTown_ } from "../actions"
import Town from "./Town"

export const mapStateToProps = (state) => {
  return { town: state.town }
}

export const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchTown: () => {
      dispatch(_fetchTown_(props.townId))
    }
  }
}

class TownContainer extends Component {

  componentDidMount() {
    this.props.fetchTown()
  }

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

const _Town_ = connect(mapStateToProps, mapDispatchToProps)(TownContainer)

export default _Town_

