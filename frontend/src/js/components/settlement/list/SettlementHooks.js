import React, { useEffect, useState } from "react"
import SettlementList from "./SettlementList"

function SettlementListHook() {
  const [data, setData] = useState({ settlements: [] })

  useEffect(() => {
    fetch('http://localhost:8080/settlements')
      .then(res => res.json())
      .then((settlements) => {
        setData({ settlements: settlements })
      })
      .catch(console.log)
  }, [])

  return <SettlementList settlements={data.settlements}/>
}

export default SettlementListHook