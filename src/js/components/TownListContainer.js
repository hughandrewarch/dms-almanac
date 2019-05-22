import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchTown as _fetchTown_, fetchTowns as _fetchTowns_ } from "../actions"
import TownList from "./TownList"

export const mapStateToProps = (state) => {
  return { towns: state.towns }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchTowns: () => {
      dispatch(_fetchTowns_())
    },
    fetchTown: (townId) => {
      dispatch(_fetchTown_(townId))
    }
  }
}

class _TownListContainer_ extends Component {

  componentDidMount() {
    this.props.fetchTowns()
  }

  render() {
    return (
      <div>
        <TownList towns={this.props.towns}
                  selectTown={this.props.fetchTown}/>
      </div>

    )
  }
}

const TownListContainer = connect(mapStateToProps, mapDispatchToProps)(_TownListContainer_)

export default TownListContainer