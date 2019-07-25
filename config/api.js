import "isomorphic-unfetch"
import getConfig from 'next/config'

const { host } = getConfig().publicRuntimeConfig

export const globalFetch = path => {
  return new Promise((resolve, reject) => {
    fetch(`${host}${path}`)
      .then(res => {
        if (!res.ok) {
          reject(res.statusText)
        }
        return res.json()
      })
      .then(data => {
        console.log("---", data)
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
