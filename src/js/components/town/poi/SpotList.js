import React from "react"
import * as Props from "../../../props"
import PropTypes from 'prop-types'

export default class SpotList extends React.Component {
  static propTypes = {
    spots: PropTypes.arrayOf(Props.SPOT),
    selectSpot: PropTypes.func,
  }

  selectSpot(_, el) {
    this.props.selectSpot(el.id)
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.spots.map(el => (
          <li className="list-group-item"
              key={el.id}
              onClick={(e) => this.selectSpot(e, el)}>
            {el.name}
          </li>
        ))}
      </ul>
    )
  }
}
