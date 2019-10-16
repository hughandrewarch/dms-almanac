// TODO extract reusable api object
export function createSettlement(name, population, description) {
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

export function getSettlement(id) {
  return fetch('http://localhost:8080/settlement/' + id)
    .then(res => res.json())
    .catch(console.log)
}

export function getSettlements() {
  return fetch('http://localhost:8080/settlements')
    .then(res => res.json())
    .catch(console.log)
}
