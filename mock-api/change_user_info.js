module.exports = [
  {
    method: 'put',
    url: '/api/users/info',
    response: function() {
      this.set('Set-Cookie', "blbbl; path=/; HttpOnly");
      return {
       "id": 1,
       "name": "John",
       "age": this.request.body.age,
       "gender": this.request.body.gender
      };
    }
  }
];
