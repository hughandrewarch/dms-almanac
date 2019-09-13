import React from "react"
import * as Props from "../../props"
import PropTypes from 'prop-types'

export default class List extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(Props.LIST_ITEM),
    onSelectItem: PropTypes.func,
  }

  selectItem(_, el) {
    this.props.onSelectItem(el.id)
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.items.map(el => (
          <li className="list-group-item"
              key={el.id}
              onClick={(e) => this.selectItem(e, el)}>
            {el.name}
          </li>
        ))}
      </ul>
    )
  }
}
