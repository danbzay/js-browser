const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const { koaBody } = require('koa-body');
const jsonBody = require('koa-json-body');
const cors = require('@koa/cors');
const path = require('path');

const app = new Koa();
const router = new Router();
const img = path.join(__dirname, 'images');
console.log(img);
app.use(cors());
//app.use(serve('/images/'));

router.post('/images', koaBody({
  multipart: true, 
  formidable: { 
    uploadDir: path.join(__dirname,'images'), 
    keepExtentions: true
  }}),
  (ctx, next) => {
    console.log('post images');
    console.log(JSON.stringify(ctx.request.body));
    console.log(JSON.stringify(ctx.request.files));

});
router.get('/images/', (ctx, next) =>  console.log('get img'));
app.use(router.routes()).use(router.allowedMethods());

/*
//app.use(body());

// POST & PUT
app.use(async (ctx, next) => {
  if (ctx.method !== 'POST' && ctx.method !== 'PUT') {
    await next();
    return;
  }

  console.log('body: ' + JSON.stringify(ctx.request.body)); 
  try {
    const ticket = ctx.request.body.ticket;
    if (ticket.id === 'NEW') {
      ticket.id = ++maxId + '';
      console.log('maxID:' + maxId);
      tickets.set(ticket.id, {status: false, created: Date.now() + '',
        ...ticket});  
    } else {
      console.log('reset');
      tickets.set(ticket.id, {...tickets.get(ticket.id), ...ticket});
    }
    ctx.request.body.description 
      ? descriptions.set(ticket.id, ctx.request.body.description) : 0;
    ctx.response.body = tickets.get(ticket.id);
    ctx.response.status = 200
  console.log('res body: ' + JSON.stringify(ctx.response.body)); 
  console.log('tickets: ' + JSON.stringify([...tickets.values()])); 
  } catch (err) {
    console.log('error' + err.message);
  }
  //console.log('ctx: ' + ctx);
  return;
});
// GET
app.use(async (ctx, next) => {
  if (ctx.method !== 'GET') {
    await next();
    return;
  }
  console.log('query: ' + JSON.stringify(ctx.request.query));
  let id = ctx.request.query.id;
  console.log('id: ' + id);
  console.log('ticket id: ' + tickets.get(id));
  id 
    ? ctx.response.body = {description: descriptions.get(id), 
      ticket: tickets.get(id)}
    : ctx.response.body = [...tickets.values()];
  console.log('res: ' + JSON.stringify(ctx.response.body));
  return;
});
// DELETE
app.use(async (ctx, next) => {
  if (ctx.method !== 'DELETE') {
    await next();
    return;
  }
  console.log('query: ' + JSON.stringify(ctx.query));
  tickets.delete(ctx.request.query.id);
  descriptions.delete(ctx.request.query.id);
  ctx.response.status = 200
  console.log('ctx: ' + JSON.stringify(ctx)); 
  return; 
});
*/
app.listen(3000);
console.log('server listen port 3000');
