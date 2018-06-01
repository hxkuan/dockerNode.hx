/**
 * Created by wali on 2018/6/1.
 */
import Koa from "koa";

const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello Koa, hxk!!';
});

app.listen(3000);