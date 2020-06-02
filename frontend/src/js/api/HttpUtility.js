//const RequestMethod = {
//  Get: 'GET',
//  Post: 'POST',
//  Put: 'PUT',
//  Delete: 'DELETE',
//  Options: 'OPTIONS',
//  Head: 'HEAD',
//  Patch: 'PATCH',
//};

export default class HttpUtility {

    static async get(endpoint) {
        return fetch(endpoint)
           .then(res => res.json())
           .catch(console.log)
    }

    static async post(endpoint, body = {}) {
        console.log(body)
        let request = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }

        return fetch(endpoint, request)
            .then(res => res.json())
            .catch(console.log)

    }
}