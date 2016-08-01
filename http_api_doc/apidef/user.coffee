###
@api {POST} /api/auth/sign_up 用户注册
@apiDescription 提交用户注册信息
@apiName 1 user sign up
@apiGroup User

@apiParam {String} name 注册用户名
@apiParam {String} password 注册密码

@apiSuccessExample 请求成功示例
  HTTP/1.1 200 OK
  Set-Cookie: user login success cookie
  {
   "id": 1,
   "name": "John"
  }

@apiError UserNameAlreadyEXists 请求注册的用户名已经被使用
@apiErrorExample 请求失败示例
  HTTP/1.1 400 Bad Request
  {
    "error": "UserNameAlreadyEXists"
  }
###

###
@api {POST} /api/auth/sign_in 用户登录
@apiDescription 用户登录
@apiName 2 user sign in
@apiGroup User

@apiParam {String} name 登录用户名
@apiParam {String} password 登录密码

@apiSuccessExample 请求成功示例
  HTTP/1.1 200 OK
  Set-Cookie: user login success cookie
  {
   "id": 1,
   "name": "John"
  }

@apiError AuthFailure 用户名或密码错误
@apiError UserNotEXists 用户不存在
@apiErrorExample 请求失败示例
  HTTP/1.1 400 Bad Request
  {
    "error": "AuthFailure"
  }
###

###
@api {get} /api/users/info 获取用户信息
@apiDescription 获取当前登录的用户信息
@apiName 3 get user information
@apiGroup User

@apiPermission 需要登录
@apiHeader {String} Cookie 用户的Cookie信息

@apiSuccessExample 请求成功示例
  HTTP/1.1 200 OK
  Set-Cookie: user login success cookie
  {
   "id": 1,
   "name": "John",
   "age": null,
   "gender": null
  }
###

###
@api {PUT} /api/users/info 修改用户信息
@apiDescription 修改当前登录的用户信息
@apiName 4 change user information
@apiGroup User

@apiPermission 需要登录
@apiHeader {String} Cookie 用户的Cookie信息

@apiParam {Number} age 用户年龄
@apiParam {String} gender 用户性别

@apiSuccessExample 请求成功示例
  HTTP/1.1 200 OK
  Set-Cookie: user login success cookie
  {
   "id": 1,
   "name": "John",
   "age": 18,
   "gender": "男"
  }

###
