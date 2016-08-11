/*
 * @providesModule APIFetch
 */

import {
  Alert,
  AsyncStorage
} from 'react-native'

export default APIFetch = {
  get_cookie () {
    return _get_cookie()
  },

  clear_cookie () {
    return _clear_cookie()
  },

  get (url, data = {}) {
    promise = new FetchPromise()

    console.log("GET: " + url)
    console.log(data)

    // _get_cookie().then((cookie) => {
      fetch(url, {
        method: 'GET',
      }).then(request_then(promise))

      return promise
    // })

  },

  post (url, data = {}) {
    promise = new FetchPromise()

    console.log("POST: " + url)
    console.log(data)

    form_data = new FormData()
    for (key in data) {
      value = data[key]
      form_data.append(key, value)
    }
    console.log(form_data)

    // _get_cookie().then((cookie) => {
      fetch(url, {
        method: 'POST',
        body: form_data
      }).then(request_then(promise))
    // })

    return promise
  },

  put (url, data = {}) {
    promise = new FetchPromise()

    console.log("PUT: " + url)
    console.log(data)

    var formBody = []
    for (var property in data) {
      var key   = encodeURIComponent(property)
      var value = encodeURIComponent(data[property])
      formBody.push(key + "=" + value)
    }
    formBody = formBody.join("&")

    console.log(formBody)

    // _get_cookie().then((cookie) => {
      fetch(url, {
        method: 'PUT',
        body: formBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(request_then(promise))
    // })

    return promise
  },

  delete (uri, data = {}) {
    promise = new FetchPromise()

    console.log("DELETE: " + url)
    console.log(data)

    form_data = new FormData()
    for (key in data) {
      value = data[key]
      console.log("key: " + key)
      console.log("value: " + value)
      form_data.append(key, value)
    }
    console.log(form_data._parts.length)

    // _get_cookie().then((cookie) => {
      fetch(url, {
        method: 'DELETE',
        body: form_data._parts.length == 0 ? null : form_data
      }).then(request_then(promise))
    // })

    return promise
  }
}

const request_then = (promise) => {
  return (res) => {
    console.log(res)

    // save_cookie(res).then(function(){
      if (is_json(res)) {
        res.json().then(res.ok ? promise.done_func : promise.fail_func)
      } else {
        console.log('返回的不是 JSON 信息')
      }

      promise.always_func(res)
    // })
  }
}


const save_cookie = function(res, func) {
  cookie = res.headers.get('Set-Cookie') || ''
  console.log('获取到 cookie', cookie)
  return AsyncStorage.setItem('appCookie', cookie)
}

const _get_cookie = function(func) {
  return AsyncStorage.getItem('appCookie')
}

const _clear_cookie = function(func) {
  console.log('remove cookie')
  return AsyncStorage.removeItem('appCookie')
}

const is_json = function(res) {
  content_type = res.headers.get('content-type')
  return content_type && content_type.indexOf('application/json') > -1
}

class FetchPromise {
  constructor (props) {
    this.done_func    = function(){}
    this.fail_func    = function(){}
    this.always_func  = function(){}
  }

  done (func) {
    this.done_func = func
    return this
  }

  fail (func) {
    this.fail_func = func
    return this
  }

  always (func) {
    this.always_func = func
    return this
  }
}
