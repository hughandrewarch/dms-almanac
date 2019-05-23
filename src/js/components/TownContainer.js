import { connect } from "react-redux"
import Town from "./Town"
import { fetchTown as _fetchTown_ } from "../actions"

export const mapStateToProps = (state, props) => {
  return {
    params: props.match.params,
    town: state.town
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchTown: (townId) => {
      dispatch(_fetchTown_(townId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Town)

