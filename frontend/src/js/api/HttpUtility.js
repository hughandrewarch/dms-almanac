const RequestMethod = {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Delete: 'DELETE',
  Options: 'OPTIONS',
  Head: 'HEAD',
  Patch: 'PATCH',
};

export default class HttpUtility {

    static async get(endpoint, params, requestConfig) {
        return fetch(endpoint)
           .then(res => res.json())
           .catch(console.log)
    }
}