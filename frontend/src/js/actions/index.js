import { FETCH_PLACE, RECEIVE_PERSON, } from "../constants"

// TODO break out by object
// TODO make payloads more clear as to what they are
export function createSettlement(name, population, description) {
  return () => {
    return fetch('http://localhost:8080/settlement', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:
        JSON.stringify({
          'name': name,
          'population': parseInt(population),
          'description': description,
          'type': 'TOWN'
        })
    })
      .then(res => res.json())
      .catch(console.log)
  }
}

export function fetchPlace(payload) {
  return { type: FETCH_PLACE, payload: payload }
}

export function fetchPerson(payload) {
  return (dispatch) => {
    const personId = parseInt(payload)

    return fetch('http://localhost:8080/person/' + parseInt(personId))
      .then(res => res.json())
      .then((data) => {
        dispatch(receivePerson(data))
      })
      .catch(console.log)
  }
}

export function receivePerson(payload) {
  return { type: RECEIVE_PERSON, payload: payload }
}
