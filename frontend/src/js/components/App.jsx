import React from 'react'
import SettlementListHook from "./settlement/list/SettlementHooks"

function App() {
  return (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Settlements Go Here</h2>
        <SettlementListHook/>
      </div>
    </div>
  )
}

export default App
