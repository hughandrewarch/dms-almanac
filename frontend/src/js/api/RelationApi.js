import environment from 'environment'
import HttpUtility from './HttpUtility'

const BASE_API = environment.baseApi
const API = {
  relations: `${BASE_API}/relations`
};

export default class RelationApi {

    static async getAll() {
        const endpoint = API.relations

        return await HttpUtility.get(endpoint)
    }
}
