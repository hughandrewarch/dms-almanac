export const get = (path) => {
  return fetch(path)
    .then(res => res.json())
    .catch(console.log)
}

export const post = (path, body = {}) => {
  fetch('http://localhost:8080/settlement', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: body
  })
    .then(res => res.json())
    .catch(console.log)
}
