import React from 'react'
import SettlementList from "./settlement/list/SettlementListContainer"

function App() {
  return (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Settlements Go Here</h2>
        <SettlementList/>
      </div>
    </div>
  )
}

export default App
