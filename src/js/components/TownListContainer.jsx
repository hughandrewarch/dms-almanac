import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchTown as _fetchTown_, fetchTowns as _fetchTowns_ } from "../actions"

export const mapStateToProps = (state) => {
  return { towns: state.towns }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchTowns: () => {
      dispatch(_fetchTowns_())
    },
    fetchTown: (townId) => {
      dispatch(_fetchTown_(townId))
    }
  }
}

class _TownListContainer_ extends Component {

  componentDidMount() {
    this.props.fetchTowns()
  }

  selectTown(_, el) {
    this.props.fetchTown(el.id)
  }

  //TODO extract pure TownList.js
  render() {
    return (
      <div>
        <ul className="list-group list-group-flush">
          {this.props.towns.map(el => (
            <li className="list-group-item"
                key={el.id}
                onClick={(e) => this.selectTown(e, el)}>
              {el.name}
            </li>
          ))}
        </ul>
      </div>

    )
  }
}

const TownListContainer = connect(mapStateToProps, mapDispatchToProps)(_TownListContainer_)

export default TownListContainer