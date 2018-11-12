const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('/ezone/:subcat', async ctx => {
    // console.log('xxx: ', ctx.path);
    // console.log('koa 2019: ', ctx.params);
    const categoryCode = ctx.path.split('/')[1];
    const subCatParams = ctx.params.subcat.split('-');
    const subCatId = subCatParams[subCatParams.length - 1];
    ctx.query = {
      categoryCode,
      subCatId
    };
    await app.render(ctx.req, ctx.res, '/videolist', ctx.query);
    ctx.respond = false;
  });

  router.get('/b', async ctx => {
    await app.render(ctx.req, ctx.res, '/a', ctx.query);
    ctx.respond = false;
  });

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
