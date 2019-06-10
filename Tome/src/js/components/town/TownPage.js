import React from "react"
import PropTypes from "prop-types"
import Town from "./Town"
import SpotList from "../spot/SpotList"
import PersonList from "../person/PersonList"
import { fetchTown as _fetchTown_ } from "../../actions"
import connect from "react-redux/es/connect/connect"


export const mapStateToProps = (state, props) => {
  return {
    params: props.match.params,
    town: state.townPage.town,
    spotList: state.townPage.spotList,
    personList: state.townPage.personList
  }
}

export const mapDispatchToProps = (dispatch) => {

  return {
    fetchTown: (townId) => {
      dispatch(_fetchTown_(townId))
    }
  }
}

//TODO find a proper file structure home for this
class _TownPage_ extends React.Component {

  static propTypes = {
    params: PropTypes.shape({
      townId: PropTypes.string.isRequired
    }).isRequired,
  }

  componentDidMount() {
    this.props.fetchTown(this.props.params.townId)
  }

  render() {
    return (
      <div>
        <h2>Town</h2>
        <Town town = {this.props.town}/>
        <h2>Places</h2>
        <SpotList spotList = {this.props.spotList}/>
        <h2>People</h2>
        <PersonList personList = {this.props.personList}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(_TownPage_)