import React, { useEffect, useState } from "react"
import SettlementList from "./list/settlement_list"
import Settlement from "./settlement"
import PlaceList from "../place/PlaceList"
import PersonList from "../person/person_list"
import { getSettlement, getSettlements } from "../../api/settlement"

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
    getSettlement(props.settlementId)
      .then((settlementResponse) => {
        setData({ settlementResponse: settlementResponse })
      })
  }, [props])

  return (
    <div>
      <h2>Settlement</h2>
      <Settlement settlement={data.settlementResponse.settlement}/>
      <h2>Places</h2>
      <PlaceList placeList={data.settlementResponse.placeList}/>
      <h2>People</h2>
      <PersonList people={data.settlementResponse.personList}/>
    </div>
  )
}

export function SettlementListHook() {
  const [data, setData] = useState({ settlementsOld: [] })

  useEffect(() => {
    getSettlements()
      .then(settlements => {
        setData({
            settlements: settlements,
            settlementsOld: settlements.map(settlement => {
                return {id: settlement.id, name: settlement.name}
            })
        })
      })
  }, [])

  return <SettlementList settlements={data.settlementsOld}/>
}
