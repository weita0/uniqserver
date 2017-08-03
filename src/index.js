const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

app
  .use(router.routes())
  .use(router.allowedMethods())

router.get('/', async ctx => {
  ctx.body = 'hello world'
})

app.listen(8080)