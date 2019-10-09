import React from "react"
import * as Props from "../../props"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Person } from '../../routes'

export default class PersonList extends React.Component {
  static propTypes = {
    people: PropTypes.arrayOf(Props.PERSON)
  }

  render() {

    return (
      <ul className="list-group list-group-flush">
        {this.props.people.map(el => (
          <li className="list-group-item"
              key={el.id}>
            <Link to={Person.show(el.id)}>{el.name}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

