import React from 'react'
import TownContainerOrig from "./TownContainerOrig"
import Town from "./TownContainer"

function App() {
  return (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Almanac</h2>
        <TownContainerOrig/>
        <h2>Town Goes Here</h2>
        <Town townId={3}/>
      </div>
    </div>
  )
  //TODO investigate whether or not I like using the id for town
}



export default App
