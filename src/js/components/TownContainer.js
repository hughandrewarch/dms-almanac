import { connect } from "react-redux"
import Town from "./Town"

export const mapStateToProps = (state) => {
  return {
    town: state.town
  }
}

export default connect(mapStateToProps, null)(Town)

