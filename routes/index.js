const Router = require('koa-router')

const router = new Router()


const indexC = require('../controllers')

router.get('/', indexC.listAll)
      .get('/account/add.html', indexC.addView)
      .post('/account', indexC.addAcc)
      .get('/account/:id', indexC.listById)
      .delete('/account/:id', indexC.deleteById)
      .get('/account/update/:id', indexC.updateView)
      .post('/account/update', indexC.updateAcc)

module.exports = router
