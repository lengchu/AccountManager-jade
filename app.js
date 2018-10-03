const jade = require('jade')
const path = require('path')
const Koa = require('koa')
const router = require('./routes')
const koaLogger = require('koa-logger')
const koaStatic = require('koa-static')

const app = new Koa()
const viewsPath = path.resolve(path.join(__dirname, 'views'))
const staticPath = path.resolve(path.join(viewsPath, 'static'))

app.use(koaLogger())
app.use(koaStatic(staticPath))

app.use(async (ctx, next) => {
    ctx.render = async (view, locals) => {
        const renderFn = jade.compileFile(path.join(viewsPath, view))
        ctx.body = renderFn(locals)
    }
    await next()
})


app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('server is running on localhost:3000')
})

