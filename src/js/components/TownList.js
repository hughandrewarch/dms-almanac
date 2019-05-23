import React from "react"
import * as Props from "../props"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"


export default class TownList extends React.Component {
  static propTypes = {
    towns: PropTypes.arrayOf(Props.TOWN),
    selectTown: PropTypes.func,
  }

  //TODO export to routes file
  linkTown(id) {
    return "/town/" + id
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.towns.map(el => (
          <li className="list-group-item"
              key={el.id}>
            <Link to={this.linkTown(el.id)}>{el.name}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

