import React from 'react'
import TownContainer from "./TownContainer"

function App() {
  return (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Almanac</h2>
        <TownContainer/>
      </div>
    </div>
  );
}

export default App;
