import React from "react"

export default class DrewTest extends React.Component {

  test() {
    console.log("HELLO")
  }

  render() {
    return (
    <div>
        <button onClick={this.test}>Hello</button>
    </div>
    )
  }
}