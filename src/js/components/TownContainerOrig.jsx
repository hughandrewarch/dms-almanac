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

//TODO rename and use as a control to choose which town to display
class _TownContainer_ extends Component {

  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    this.props.fetchTowns()
  }

  renderTown() {
    if (this.state.selectedTown) {
      return (
        <Town town={this.state.selectedTown}/>
      )
    }
  }

  selectTown(_, el) {
    this.setState(() => {
      return { selectedTown: el }
    })
  }

  render() {
    return (
      <div>
        <h2>Towns Go Here</h2>
        <ul className="list-group list-group-flush">
          {this.props.towns.map(el => (
            <li className="list-group-item"
                key={el.id}
                onClick={(e) => this.selectTown(e, el)}>
              {el.name}
            </li>
          ))}
        </ul>
        {this.renderTown()}
      </div>

    )
  }
}

const TownContainerOrig = connect(mapStateToProps, mapDispatchToProps)(_TownContainer_)

export default TownContainerOrig