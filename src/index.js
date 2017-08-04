const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const proxy = require('koa-proxy')
const convert = require('koa-convert')

app
  .use(router.routes())
  .use(router.allowedMethods())

router.get('/api', async ctx => {
  ctx.body = 'hello world'
})

router.get('/api/google_translate', convert(proxy({
  host: 'https://translate.google.com'  
})))

router.post('/api/single_translate', convert(proxy({
  host: 'https://translate.google.com/',  
})))

app.listen(8080)