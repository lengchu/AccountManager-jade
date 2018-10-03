const Account = require('../models/Account')

const index = async ctx => {
    ctx.render('index.jade', {
        names: ['lenchu', 'admin']
    })
}

const listAll = async ctx => {
    let accs = await Account.findAll({raw: true})
    await ctx.render('accounts.jade', {accs})
}

module.exports = {
    index,
    listAll
}
