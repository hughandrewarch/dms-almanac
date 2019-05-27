import React from "react"
import PropTypes from "prop-types"
import Town from "./TownContainer"
import SpotList from "./spot/SpotListContainer"
import PersonList from "./person/PersonListContainer"
import { fetchTown as _fetchTown_ } from "../../actions"
import connect from "react-redux/es/connect/connect"


export const mapStateToProps = (state, props) => {
  return {
    params: props.match.params,
  }
}

export const mapDispatchToProps = (dispatch) => {

  return {
    fetchTown: (townId) => {
      dispatch(_fetchTown_(townId))
    }
  }
}


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
        <Town/>
        <h2>Places</h2>
        <SpotList/>
        <h2>People</h2>
        <PersonList/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(_TownPage_)