'use strict';
const fs =require('fs'),
  KoaRouter = require('koa-router');

function addControllers(router, dir, controllersDir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fn = `${dir}/${file}`,
      stat = fs.statSync(fn);
    if (stat.isDirectory()) {
      return addControllers(router, fn, controllersDir);
    }

    const handle = require(fn);
    let url = fn.split(controllersDir)[1].split('.')[0];
    url = url.slice(0, 1) === '/' ? url : `/${url}`;
    router.get(url, handle);
    router.post(url, handle);
    if (url === '/index') {
      router.get(url.split('.')[0], handle);
      router.post(url.split('.')[0], handle);
    }
  })
}

module.exports =  function (dir = './controllers') {
  if (!dir) {
    throw `dir can not be null in ${__filename}`;
  }
  const router = KoaRouter();
  addControllers(router, dir, dir);
  router.get('/', (ctx, next) => require(`${dir}/index`)(ctx, next));
  return router.routes();
};