import environment from 'environment'
import HttpUtility from './HttpUtility'

const BASE_API = environment.baseApi
const API = {
  relationTypes: `${BASE_API}/relationTypes`
};

export default class RelationTypeApi {

    static async getAll() {
        const endpoint = API.relationTypes

        return await HttpUtility.get(endpoint)
    }
}
