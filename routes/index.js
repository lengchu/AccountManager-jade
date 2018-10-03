const Router = require('koa-router')

const router = new Router()


const indexC = require('../controllers')

router.get('/', indexC.listAll)
      .get('/account/add.html', indexC.addView)
      .post('/account', indexC.addAcc)
      .get('/account/:id', indexC.listById)

module.exports = router
