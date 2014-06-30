
var koa = require('koa');

/**
 * This is a promisified version of zlib's gzip function,
 * allowing you to simply `yield` it without "thunkifying" it.
 *
 *   this.response.body = yield gzip('something');
 */
var gzip = require('mz/zlib').gzip;

var app = module.exports = koa();

app.use(function* () {
  var content = 'hello world';
  var encoding = this.request.acceptsEncodings('gzip')? 'gzip': 'identity';
  var body = this.request.acceptsEncodings('gzip')? yield gzip(content): content;

  this.response.set('Content-Encoding', encoding);
  this.response.body = body;

})
