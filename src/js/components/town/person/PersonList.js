import React from "react"
import * as Props from "../../../props"
import PropTypes from 'prop-types'

export default class PersonList extends React.Component {
  static propTypes = {
    people: PropTypes.arrayOf(Props.PERSON),
    selectPerson: PropTypes.func,
  }

  selectPerson(_, el) {
    this.props.selectPerson(el.id)
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.people.map(el => (
          <li className="list-group-item"
              key={el.id}
              onClick={(e) => this.selectPerson(e, el)}>
            {el.name}
          </li>
        ))}
      </ul>
    )
  }
}
