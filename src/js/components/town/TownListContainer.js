import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchTown as _fetchTown_, fetchTownList as _fetchTownList_ } from "../../actions"
import TownList from "./TownList"

export const mapStateToProps = (state) => {
  return { towns: state.towns }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    //TODO Maybe pull out to page object
    fetchTownList: () => {
      dispatch(_fetchTownList_())
    },
    fetchTown: (townId) => {
      dispatch(_fetchTown_(townId))
    }
  }
}

class _TownListContainer_ extends Component {

  componentDidMount() {
    this.props.fetchTownList()
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