import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchSpot as _fetchSpot_ } from "../../actions"
import List from "../list/List"

export const mapStateToProps = (state) => {
  return { spots: state.town.spots }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpot: (spotId) => {
      dispatch(_fetchSpot_(spotId))
    }
  }
}

class _SpotListContainer_ extends Component {

  render() {
    return (
      <div>
        <List items={this.props.spots}
              selectItem={this.props.fetchSpot}/>
      </div>

    )
  }
}

const SpotListContainer = connect(mapStateToProps, mapDispatchToProps)(_SpotListContainer_)

export default SpotListContainer