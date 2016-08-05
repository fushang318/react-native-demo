/* 
 * @providesModule API 
 */

import {
  Alert
} from 'react-native'

const server_base = 'http://demo.roshan.top'
// const server_base = 'http://192.168.0.102:10086'

const build_url = (path) => {
  return server_base + path
}

const auth_sign_up = (user) => {
  // url = build_url('/api/auth/sign_up')
  url = build_url('/api/auth/sign_up/success')

  Fetch.post(url, user)
    .done((resJSON) => {
      console.log(resJSON)
    })
    .fail((res) => {
      res.json().then((resJSON) => {
        Alert.alert(resJSON.error)
      })
    })
}

const auth_sign_in = (user) => {
  url = build_url('/api/auth/sign_in')
  return Fetch.post(url, user)
}


export default API = {
  auth: {
    sign_up: auth_sign_up,
    sign_in: auth_sign_in,
  }
}