const Koa = require('koa'),
  favicon = require('./middleware/favicon'),
  router = require('./middleware/router'),
  serve = require('koa-static'),
  app = new Koa;

app.use(favicon(_ROOT_ + '/favicon.ico'));
app.use(serve(_ROOT_ + '/public'));

app.use(router(_ROOT_ + '/src/controllers'));

// app.use(ctx => {
//   ctx.body = 'Hello Koa, hxk';
// });

app.listen(3000);