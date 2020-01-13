import "isomorphic-unfetch"

export const host = "http://180.250.218.142:8080"

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
      fetch(`${host}${path}`)
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

export const globalPost = (path, data) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}${path}`, {
      method: "POST",
      body: data
    })
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
