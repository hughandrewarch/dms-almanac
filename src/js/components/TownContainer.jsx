import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchTowns } from "../actions"

export const mapStateToProps = (state) => {
  return { towns: state.towns }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchTowns: () => {
      dispatch(fetchTowns())
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
        <div>
          Towns go here
        </div>
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