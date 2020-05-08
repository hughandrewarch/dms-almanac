export const get = (path) => {
  return fetch(path)
    .then(res => res.json())
    .catch(console.log)
}

export const post = (path, body = {}) => {

   let request = {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(body)
       }

  return fetch(path, request)
    .then(res => res.json())
    .catch(console.log)
}
