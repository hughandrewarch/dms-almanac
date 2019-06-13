import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchSettlementList as _fetchSettlementList_ } from "../../../actions"
import NavList from "../../list/NavList"
import { Settlements } from "../../../routes"

export const mapStateToProps = (state) => {
  return { settlements: state.settlements }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    //TODO Maybe pull out to page object
    fetchSettlementList: () => {
      dispatch(_fetchSettlementList_())
    }
  }
}

class _SettlementListContainer_ extends Component {

  componentDidMount() {
    this.props.fetchSettlementList()
  }

  render() {
    return (
      <div>
        <NavList items={this.props.settlements}
                 onSelectLink={Settlements.show}/>
      </div>
    )
  }
}

const SettlementListContainer = connect(mapStateToProps, mapDispatchToProps)(_SettlementListContainer_)

export default SettlementListContainer