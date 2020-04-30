import React from "react"
import PersonList from "./person_list"
import connect from "react-redux/es/connect/connect"

const mapStateToProps = (state, props) => {

  return {
    people: Object.values(state.people.byId)
  }
}

class PersonListWrapper extends React.Component {

  renderPeople() {
    return (
      <div>
        <PersonList people={this.props.people}/>
      </div>
    )
  }

  render() {
    if (this.props.people != null) {
      return this.renderPeople()
    } else {
      return null
    }
  }
}

export default connect(mapStateToProps)(PersonListWrapper)
