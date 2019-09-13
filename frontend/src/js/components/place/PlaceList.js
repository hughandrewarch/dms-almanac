import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchPlace as _fetchPlace_ } from "../../actions"
import List from "../list/List"
import PropTypes from "prop-types"
import * as Props from "../../props"

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlace: (placeId) => {
      dispatch(_fetchPlace_(placeId))
    }
  }
}

class _PlaceListContainer_ extends Component {
  static propTypes = {
    placeList: PropTypes.arrayOf(Props.LIST_ITEM),
  }

  render() {
    return (
      <div>
        <List items={this.props.placeList}
              selectItem={this.props.fetchPlace}/>
      </div>

    )
  }
}

const PlaceList = connect(null, mapDispatchToProps)(_PlaceListContainer_)

export default PlaceList
