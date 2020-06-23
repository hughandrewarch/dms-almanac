import environment from 'environment'
import HttpUtility from './HttpUtility'
import SETTLEMENT_PERSON from 'js/constants/relations'
import { camelCase } from 'lodash';

const BASE_API = environment.baseApi
const API = {
  relations: `${BASE_API}/relations`,
};

export default class RelationApi {

    static async getAll() {
        const endpoint = API.relations

        return await HttpUtility.get(endpoint)
    }

    static async createRelation(left, right, relationType) {
        const settlementPerson = camelCase(relationType)
        const endpoint = API.relations.concat('/', settlementPerson)
        const body = { left: left, right: right}

        return await HttpUtility.post(endpoint, body)
    }
}
