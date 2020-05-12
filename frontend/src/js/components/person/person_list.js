import React from "react"
import * as Props from "../../props"
import PropTypes from 'prop-types'
import NavList from "../list/NavList"

export default class PersonList extends React.Component {
  static propTypes = {
    people: PropTypes.arrayOf(Props.PERSON)
  }

  to(elementId) {
    return "/" + elementId
  }

  render() {
    return (
      <div>
        <NavList items={this.props.people} to={this.to}/>
      </div>
    )
  }
}
