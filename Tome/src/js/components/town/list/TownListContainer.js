import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchTownList as _fetchTownList_ } from "../../../actions"
import NavList from "../../list/NavList"
import { Towns } from "../../../routes"

export const mapStateToProps = (state) => {
  return { towns: state.towns }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    //TODO Maybe pull out to page object
    fetchTownList: () => {
      dispatch(_fetchTownList_())
    }
  }
}

class _TownListContainer_ extends Component {

  componentDidMount() {
    this.props.fetchTownList()
  }

  render() {
    return (
      <div>
        <NavList items={this.props.towns}
                 onSelectLink={Towns.show}/>
      </div>
    )
  }
}

const TownListContainer = connect(mapStateToProps, mapDispatchToProps)(_TownListContainer_)

export default TownListContainer