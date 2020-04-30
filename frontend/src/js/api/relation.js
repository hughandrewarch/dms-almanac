import * as Api from './api'

export function getRelations() {
  return Api.get('http://localhost:8080/relations')
}
