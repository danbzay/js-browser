const Koa = require('koa');
const body = require('koa-json-body');
const cors = require('@koa/cors');


const app = new Koa();
app.use(cors());
app.use(body({ limit: '10kb', fallback: true }));

const tickets = new Map([["1", {id: "1", name: "First", status: false, 
  created: "0"}]]);
const descriptions = new Map([["1", "Test ticket"]]);
let maxId = Math.max([...tickets.keys()].map(k => Number(k))) || "1"; 

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
  
app.listen(3000);
console.log('server listen port 3000');
