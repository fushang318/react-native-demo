module.exports = [
  {
    method: 'post',
    url: '/api/auth/sign_in/success',
    response: function() {
      this.set('Set-Cookie', "blbbl; path=/; HttpOnly");
      return {
        "id": 1,
        "name": this.request.body.name
      };
    }
  },
  {
    method: 'post',
    url: '/api/auth/sign_in/auth_failure',
    response: function() {
      this.status = 400;
      return {
        "error": "AuthFailure"
      };
    }
  },
  {
    method: 'post',
    url: '/api/auth/sign_in/user_not_exists',
    response: function() {
      this.status = 400;
      return {
        "error": "UserNotEXists"
      };
    }
  }
];
