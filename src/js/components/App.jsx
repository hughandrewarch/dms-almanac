import React from 'react'
import TownList from "./TownListContainer"
import Town from "./TownContainer"

function App() {
  return (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Almanac</h2>
        <h2>Towns Go Here</h2>
        <TownList/>
        <h2>Town Goes Here</h2>
        <Town/>
      </div>
    </div>
  )
}

export default App
