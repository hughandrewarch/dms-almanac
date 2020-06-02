import environment from 'environment'
import HttpUtility from 'js/api/HttpUtility'

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
