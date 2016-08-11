/*
 * @providesModule API
 */

import {
  Alert
} from 'react-native'

import APIFetch from 'APIFetch'

const server_base = 'http://demo.roshan.top'
// const server_base = 'http://192.168.0.128:3000'

const build_url = (path) => {
  return server_base + path
}

const auth_sign_up = (user) => {
  url = build_url('/api/auth/sign_up')
  return APIFetch.post(url, user)
}

const auth_sign_in = (user) => {
  url = build_url('/api/auth/sign_in')
  return APIFetch.post(url, user)
}

const auth_get_user_info = () => {
  url = build_url('/api/users/info')
  return APIFetch.get(url)
}

const auth_put_user_info = (user) => {
  url = build_url('/api/users/info')
  return APIFetch.put(url, user)
}

const auth_sign_out = () => {
  // return AsyncStorage.setItem('appCookie', '')
  url = build_url('/api/auth/sign_out')
  return APIFetch.delete(url)
}

export default API = {
  get_cookie: APIFetch.get_cookie,

  auth: {
    sign_up: auth_sign_up,
    sign_in: auth_sign_in,
    get_user_info: auth_get_user_info,
    put_user_info: auth_put_user_info,

    sign_out: auth_sign_out,
  }
}
