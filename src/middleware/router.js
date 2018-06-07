'use strict';
const fs = require('fs'),
  KoaRouter = require('koa-router');

KoaRouter.prototype.addControllers = function (dir, controllersDir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fn = `${dir}/${file}`,
      stat = fs.statSync(fn);
    if (stat.isDirectory()) {
      return this.addControllers(fn, controllersDir);
    }

    const handle = require(fn);
    let url = fn.split(controllersDir)[1].split('.')[0];
    url = url.slice(0, 1) === '/' ? url : `/${url}`;
    this.addRequest(url, handle);
    let indexExt = '/index';
    if (url.endsWith('/index')) {
      this.addRequest(url.slice(0, url.length - indexExt.length + 1), handle);
    }
  })
};

KoaRouter.prototype.addRequest = function (path, middleware) {
  this.get(path, middleware);
  this.post(path, middleware);
};

module.exports = function (dir = './controllers') {
  if (!dir) {
    throw `dir can not be null in ${__filename}`;
  }
  const router = KoaRouter();
  router.addControllers(dir, dir);
  return function (ctx, next) {
    ctx.params = ctx.req.method === 'GET' ? ctx.query : ctx.request.body;// 同时处理get post请求参数
    router.routes()(ctx, next);
  }
};