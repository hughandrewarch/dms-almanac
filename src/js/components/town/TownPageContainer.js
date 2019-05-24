import { connect } from "react-redux"
import { fetchTown as _fetchTown_ } from "../../actions"
import TownPage from "./TownPage"

export const mapStateToProps = (state, props) => {
  return {
    params: props.match.params,
  }
}

export const mapDispatchToProps = (dispatch) => {

  return {
    fetchTown: (townId) => {
      dispatch(_fetchTown_(townId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TownPage)

