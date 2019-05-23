import React from "react"
import TownView from "./TownView"
import PropTypes from "prop-types"

export default class Town extends React.Component {

  static propTypes = {
    params: PropTypes.shape({
      townId: PropTypes.string.isRequired
    }).isRequired,
  }

  componentDidMount() {
    this.props.fetchTown(this.props.params.townId)
  }

  render() {
    return <TownView town={this.props.town}/>
  }
}
