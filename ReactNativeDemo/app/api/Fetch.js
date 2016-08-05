/* 
 * @providesModule APIFetch 
 */

import {
  Alert
} from 'react-native'

export default Fetch = {
  get (url, data = {}) {
    var done_func = function(){}
    var fail_func = function(){}

    promise = {
      done (func) {
        done_func = func
        return promise
      },

      fail (func) {
        fail_func = func
        return promise
      },

      always (func) {
        always_func = func
        return promise
      }
    }

    console.log("GET: " + url)

    fetch(url, {
      method: 'GET',
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.ok) {
          res.json().then(done_func)
        } else {
          res.json().then(fail_func)
        }

        always_func(res)
      })

    return promise
  },

  post (url, data = {}) {
    var done_func = function(){}
    var fail_func = function(){}
    var always_func = function(){}

    promise = {
      done (func) {
        done_func = func
        return promise
      },

      fail (func) {
        fail_func = func
        return promise
      },

      always (func) {
        always_func = func
        return promise
      }
    }

    console.log("POST: " + url)
    console.log(data)

    form_data = new FormData()
    for (key in data) {
      value = data[key]
      form_data.append(key, value)
    }

    console.log(form_data)

    fetch(url, {
      method: 'POST',
      body: form_data
    })
      .then((res) => {
        console.log(res)
        content_type = res.headers.get('content-type')

        if (content_type && content_type.indexOf('application/json') > -1) {
          if (res.ok) {
            res.json().then(done_func)
          } else {
            res.json().then(fail_func)
          }
        } else {
          console.log('返回的不是 JSON 信息')
        }

        always_func(res)
      })

    return promise
  }
}