import * as Api from './api'

export function createPerson(name, description) {
  return Api.post('http://localhost:8080/person',
    {
      'name': name,
      'description': description,
      'race': 'HUMAN'
    })
}
