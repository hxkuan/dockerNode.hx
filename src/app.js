/**
 * Created by wali on 2018/6/1.
 */
import Koa from "koa";
import favicon from "./middleware/favicon"
import serve from 'koa-static'
const app = new Koa();

app.use(favicon(_ROOR_ + '/favicon.ico'));
app.use(serve(_ROOR_ + '/public'));

// app.use(ctx => {
//   ctx.body = 'Hello Koa, hxk';
// });

app.listen(3000);