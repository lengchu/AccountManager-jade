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

const addView = async ctx => {
    await ctx.render('addAcc.jade')
}

const addAcc = async ctx => {
    const params = ctx.request.body
    const acc = await Account.create(params)
    ctx.redirect(`/account/${acc.id}`)
}

const listById = async ctx => {
    const id = ctx.params.id
    const acc = await Account.findById(id)
    await ctx.render('accDetials.jade', {acc})
}

module.exports = {
    index,
    listAll,
    addView,
    addAcc,
    listById
}
