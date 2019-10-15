import React, { useEffect, useState } from "react"
import Person from "./person"

//TODO add loading
//TODO break out into proper file structure
export function PersonHook(props) {
  const [data, setData] = useState({
    person: {}
  })

  useEffect(() => {
    fetch('http://localhost:8080/person/' + props.personId)
      .then(res => res.json())
      .then((personResponse) => {
        setData({ person: personResponse.person })
      })
      .catch(console.log)
  }, [props])

  return (
    <div>
      <h2>Person</h2>
      <Person person = {data.person}/>
    </div>
  )
}
