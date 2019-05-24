import React from "react"
import PropTypes from "prop-types"
import Town from "./TownContainer"
import SpotList from "./poi/SpotListContainer"

export default class TownPage extends React.Component {

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
        <Town/>
        <SpotList/>
      </div>
    )
  }
}