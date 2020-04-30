import * as Api from './api'

export function createSettlement(name, population, description) {
  return Api.post('http://localhost:8080/settlement',
    {
      'name': name,
      'population': parseInt(population),
      'description': description,
      'type': 'TOWN'
    })
}

export function getSettlement(id) {
  return Api.get('http://localhost:8080/settlement/' + id)
}

//TODO remove
export function listSettlements() {
  return Api.get('http://localhost:8080/settlement/list')
}

export function getSettlements() {
  return Api.get('http://localhost:8080/settlement')
}
