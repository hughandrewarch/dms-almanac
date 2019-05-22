import { connect } from "react-redux"
import Town from "./Town"

export const mapStateToProps = (state) => {
  return { town: state.town }
}

const _Town_ = connect(mapStateToProps, null)(Town)

export default _Town_

