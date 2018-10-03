const Router = require('koa-router')

const router = new Router()


const indexC = require('../controllers')

router.get('/', indexC.listAll)


module.exports = router
