import React, { Component } from "react"
import { connect } from "react-redux"
import { receiveTowns as _receiveTowns_} from "../actions"
import { fetchTowns as _fetchTowns_} from "../actions"

export const mapStateToProps = (state) => {
  return { towns: state.towns }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    receiveTowns: () => {
      dispatch(_receiveTowns_())
    },
    fetchTowns: () => {
      dispatch(_fetchTowns_())
    }
  }
}

class _TownContainer_ extends Component {

  componentDidMount() {
    this.props.fetchTowns()
  }

  render() {
    return (
      <div>
        <h2>Towns Go Here</h2>
        <ul className="list-group list-group-flush">
          {this.props.towns.map(el => (
            <li className="list-group-item" key={el}>
              <div>
                {el}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const TownContainer = connect(mapStateToProps, mapDispatchToProps)(_TownContainer_)

export default TownContainer