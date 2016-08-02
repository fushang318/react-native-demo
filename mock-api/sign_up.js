module.exports = [
  {
    method: 'post',
    url: '/api/auth/sign_up/success',
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
    url: '/api/auth/sign_up/user_name_already_exists',
    response: function() {
      this.status = 400;
      return {
        "error": "UserNameAlreadyEXists"
      };
    }
  }
];
