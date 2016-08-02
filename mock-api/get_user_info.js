module.exports = [
  {
    method: 'get',
    url: '/api/users/info',
    response: function() {
      this.set('Set-Cookie', "blbbl; path=/; HttpOnly");
      return {
       "id": 1,
       "name": "John",
       "age": null,
       "gender": null
      };
    }
  }
];
