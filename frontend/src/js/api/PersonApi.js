import environment from 'environment'
import HttpUtility from './HttpUtility'

const BASE_API = environment.baseApi
const API = {
  person: `${BASE_API}/person`
}

export default class PersonApi {

    static async getAll() {
        const endpoint = API.person

        return await HttpUtility.get(endpoint)
    }

    static async create(person) {
        const endpoint = API.person

        return await HttpUtility.post(endpoint, person)
    }
}
