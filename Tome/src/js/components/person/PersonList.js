import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchPerson as _fetchPerson_ } from "../../actions"
import List from "../list/List"
import PropTypes from "prop-types"
import * as Props from "../../props"

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchPerson: (spotId) => {
      dispatch(_fetchPerson_(spotId))
    }
  }
}

class _PersonListContainer_ extends Component {
  static propTypes = {
    personList: PropTypes.arrayOf(Props.LIST_ITEM),
  }

  render() {
    return (
      <div>
        <List items={this.props.personList}
              selectItem={this.props.fetchPerson}/>
      </div>
    )
  }
}

const PersonList = connect(null, mapDispatchToProps)(_PersonListContainer_)

export default PersonList