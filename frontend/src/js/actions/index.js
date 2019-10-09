import { FETCH_PLACE } from "../constants"

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
