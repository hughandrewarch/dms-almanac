import environment from 'environment'
import * as Api from './Api'
import HttpUtility from './HttpUtility'

export function createSettlement(name, population, description) {
  return Api.post('http://localhost:8080/settlement',
    {
      'name': name,
      'population': parseInt(population),
      'description': description,
      'type': 'TOWN'
    })
}

const BASE_API = environment.baseApi
const API = {
  settlements: `${BASE_API}/settlement`
};

export default class SettlementApi {

    static async getAll() {
        const endpoint = API.settlements

        return await HttpUtility.get(endpoint)
    }
}
