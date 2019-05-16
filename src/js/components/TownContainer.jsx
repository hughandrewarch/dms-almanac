import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchTowns as _fetchTowns_ } from "../actions"
import Town from "./Town"

export const mapStateToProps = (state) => {
  return { towns: state.towns }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchTowns: () => {
      dispatch(_fetchTowns_())
    }
  }
}

//TODO either
// 1: rename and use as a control to choose which town to display
// 2: or use as only a town holder
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
            <li className="list-group-item" key={el.id}>
              <Town town={el}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const TownContainer = connect(mapStateToProps, mapDispatchToProps)(_TownContainer_)

export default TownContainer