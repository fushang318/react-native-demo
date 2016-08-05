module.exports = [
  {
    method: 'post',
    url: '/api/auth/sign_in',
    response: function() {
      debug = this.request.body.debug

      switch (debug) {
        case 'auth_failure':
          this.status = 400;
          return {
            "error": "AuthFailure"
          };

        case  'user_not_exists':
          this.status = 400;
          return {
            "error": "UserNotExists"
          };

        default:
          this.set('Set-Cookie', "blbbl; path=/; HttpOnly");
          return {
            "id": 1,
            "name": this.request.body.name
          };
      }
    }
  },
];
