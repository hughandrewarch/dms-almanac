import React, { useEffect, useState } from "react"
import SettlementList from "./settlement_list"
import Settlement from "../settlement"
import PlaceList from "../../place/PlaceList"
import PersonList from "../../person/PersonList"


//TODO add loading
//TODO break out into proper file structure
export function SettlementHook(props) {
  const [data, setData] = useState({
    settlementResponse: {
      settlement: {},
      placeList: [],
      personList: []
    }
  })

  useEffect(() => {
    fetch('http://localhost:8080/settlement/' + props.settlementId)
      .then(res => res.json())
      .then((settlementResponse) => {
        setData({ settlementResponse: settlementResponse })
      })
      .catch(console.log)
  }, [props])

  return (
    <div>
      <h2>Settlement</h2>
      <Settlement settlement={data.settlementResponse.settlement}/>
      <h2>Places</h2>
      <PlaceList placeList={data.settlementResponse.placeList}/>
      <h2>People</h2>
      <PersonList personList={data.settlementResponse.personList}/>
    </div>
  )
}

export function SettlementListHook() {
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

