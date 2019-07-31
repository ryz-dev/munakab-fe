import "isomorphic-unfetch"

export const host = "https://muna.ryzdev.id"

export const globalFetch = path => {
  if (Array.isArray(path)) {
    return new Promise((resolve, reject) => {
      return Promise.all(path)
        .then(values => Promise.all(values.map(value => value.json())))
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })

  } else {
    return new Promise((resolve, reject) => {
      fetch(path)
        .then(res => {
          if (!res.ok) {
            reject(res.statusText)
          }
          return res.json()
        })
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
