import React from "react"
import * as Props from "../props"
import PropTypes from 'prop-types'


export default class TownList extends React.Component {
  static propTypes = {
    towns: PropTypes.arrayOf(Props.TOWN),
    selectTown: PropTypes.func,
  }

  selectTown(_, el) {
    this.props.selectTown(el.id)
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.towns.map(el => (
          <li className="list-group-item"
              key={el.id}
              onClick={(e) => this.selectTown(e, el)}>
            {el.name}
          </li>
        ))}
      </ul>
    )
  }
}