import environment from 'environment'
import * as Api from './api'
import HttpUtility from './HttpUtility'

const BASE_API = environment.baseApi
const API = {
  people: `${BASE_API}/person`
};

export default class PersonApi {

    static async getAll() {
        const endpoint = API.people

        return await HttpUtility.get(endpoint)
    }
}
