define({ "api": [
  {
    "type": "POST",
    "url": "/api/auth/sign_up",
    "title": "用户注册",
    "description": "<p>提交用户注册信息</p>",
    "name": "1_user_sign_up",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>注册用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>注册密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求成功示例",
          "content": "HTTP/1.1 200 OK\nSet-Cookie: user login success cookie\n{\n \"id\": 1,\n \"name\": \"John\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameAlreadyExists",
            "description": "<p>请求注册的用户名已经被使用</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求失败示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameAlreadyExists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidef/user.coffee",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/auth/sign_in",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "2_user_sign_in",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>登录用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求成功示例",
          "content": "HTTP/1.1 200 OK\nSet-Cookie: user login success cookie\n{\n \"id\": 1,\n \"name\": \"John\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthFailure",
            "description": "<p>用户名或密码错误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotExists",
            "description": "<p>用户不存在</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求失败示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"AuthFailure\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidef/user.coffee",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "/api/auth/sign_out",
    "title": "用户登出",
    "description": "<p>用户登出</p>",
    "name": "3_user_sign_out",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "请求成功示例",
          "content": "HTTP/1.1 200 OK\nSet-Cookie: 清空\n{\n \"status\": \"SignOutSuccess\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidef/user.coffee",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/info",
    "title": "获取用户信息",
    "description": "<p>获取当前登录的用户信息</p>",
    "name": "4_get_user_information",
    "group": "User",
    "permission": [
      {
        "name": "需要登录"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Cookie",
            "description": "<p>用户的Cookie信息</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求成功示例",
          "content": "HTTP/1.1 200 OK\nSet-Cookie: user login success cookie\n{\n \"id\": 1,\n \"name\": \"John\",\n \"age\": null,\n \"gender\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotLogin",
            "description": "<p>用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotExists",
            "description": "<p>用户不存在</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求失败示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNotLogin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidef/user.coffee",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "/api/users/info",
    "title": "修改用户信息",
    "description": "<p>修改当前登录的用户信息</p>",
    "name": "5_change_user_information",
    "group": "User",
    "permission": [
      {
        "name": "需要登录"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Cookie",
            "description": "<p>用户的Cookie信息</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>用户年龄</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>用户性别</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求成功示例",
          "content": "HTTP/1.1 200 OK\nSet-Cookie: user login success cookie\n{\n \"id\": 1,\n \"name\": \"John\",\n \"age\": 18,\n \"gender\": \"男\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidef/user.coffee",
    "groupTitle": "User"
  }
] });
