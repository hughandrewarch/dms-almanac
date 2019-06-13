import React from "react"
import PropTypes from "prop-types"
import Settlement from "./Settlement"
import PlaceList from "../place/PlaceList"
import PersonList from "../person/PersonList"
import { fetchSettlement as _fetchSettlement_ } from "../../actions"
import connect from "react-redux/es/connect/connect"


export const mapStateToProps = (state, props) => {
  return {
    params: props.match.params,
    settlement: state.settlementPage.settlement,
    placeList: state.settlementPage.placeList,
    personList: state.settlementPage.personList
  }
}

export const mapDispatchToProps = (dispatch) => {

  return {
    fetchSettlement: (settlementId) => {
      dispatch(_fetchSettlement_(settlementId))
    }
  }
}

//TODO find a proper file structure home for this
class _SettlementPage_ extends React.Component {

  static propTypes = {
    params: PropTypes.shape({
      settlementId: PropTypes.string.isRequired
    }).isRequired,
  }

  componentDidMount() {
    this.props.fetchSettlement(this.props.params.settlementId)
  }

  render() {
    return (
      <div>
        <h2>Settlement</h2>
        <Settlement settlement = {this.props.settlement}/>
        <h2>Places</h2>
        <PlaceList placeList = {this.props.placeList}/>
        <h2>People</h2>
        <PersonList personList = {this.props.personList}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(_SettlementPage_)