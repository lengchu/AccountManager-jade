const Router = require('koa-router')

const router = new Router()


const indexC = require('../controllers')

router.get('/', indexC.index)


module.exports = router
