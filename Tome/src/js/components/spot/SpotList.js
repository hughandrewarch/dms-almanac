import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchSpot as _fetchSpot_ } from "../../actions"
import List from "../list/List"
import PropTypes from "prop-types"
import * as Props from "../../props"

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpot: (spotId) => {
      dispatch(_fetchSpot_(spotId))
    }
  }
}

class _SpotListContainer_ extends Component {
  static propTypes = {
    spotList: PropTypes.arrayOf(Props.LIST_ITEM),
  }

  render() {
    return (
      <div>
        <List items={this.props.spotList}
              selectItem={this.props.fetchSpot}/>
      </div>

    )
  }
}

const SpotList = connect(null, mapDispatchToProps)(_SpotListContainer_)

export default SpotList
