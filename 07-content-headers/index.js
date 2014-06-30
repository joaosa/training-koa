
var koa = require('koa');

var app = module.exports = koa();

app.use(function* () {
  var body = this.request.is('application/json')? { message: 'hi!' }: 'ok';
  this.response.body = body;
});
