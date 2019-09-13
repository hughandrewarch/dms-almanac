import React from "react"
import PropTypes from "prop-types"
import Person from "./Person"
import { fetchPerson as _fetchPerson_ } from "../../actions"
import connect from "react-redux/es/connect/connect"


export const mapStateToProps = (state, props) => {
  return {
    params: props.match.params,
    person: state.personPage.person
  }
}

export const mapDispatchToProps = (dispatch) => {

  return {
    fetchPerson: (personId) => {
      dispatch(_fetchPerson_(personId))
    }
  }
}

//TODO find a proper file structure home for this
class _PersonPage_ extends React.Component {

  static propTypes = {
    params: PropTypes.shape({
      personId: PropTypes.string.isRequired
    }).isRequired,
  }

  componentDidMount() {
    this.props.fetchPerson(this.props.params.personId)
  }

  render() {
    return (
      <div>
        <h2>Person</h2>
        <Person person = {this.props.person}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(_PersonPage_)