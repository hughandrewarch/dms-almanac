import * as Api from './api'

export function getRelationTypes() {
  return Api.get('http://localhost:8080/relationTypes')
}

