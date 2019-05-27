import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchPerson as _fetchPerson_ } from "../../../actions"
import PersonList from "./PersonList"

export const mapStateToProps = (state) => {
  return { people: state.town.people }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchPerson: (spotId) => {
      dispatch(_fetchPerson_(spotId))
    }
  }
}

class _PersonListContainer_ extends Component {

  render() {
    return (
      <div>
        <PersonList people={this.props.people}
                    selectPerson={this.props.fetchPerson}/>
      </div>
    )
  }
}

const PersonListContainer = connect(mapStateToProps, mapDispatchToProps)(_PersonListContainer_)

export default PersonListContainer