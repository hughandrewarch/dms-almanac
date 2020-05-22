import environment from 'environment'
import * as Api from 'js/api/Api'
import HttpUtility from 'js/api/HttpUtility'
import Settlement from 'js/models/Settlement'

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
  settlement: `${BASE_API}/settlement`
};

export default class SettlementApi {

    static async getAll() {
        const endpoint = API.settlement

        return await HttpUtility.get(endpoint)
    }

    static async create(settlement) {
        const endpoint = API.settlement

        return await HttpUtility.post(endpoint, settlement)
    }
}
