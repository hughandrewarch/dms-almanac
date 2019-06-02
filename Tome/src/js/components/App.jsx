import React from 'react'
import TownList from "./town/list/TownListContainer"

function App() {
  return (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Towns Go Here</h2>
        <TownList/>
      </div>
    </div>
  )
}

export default App
