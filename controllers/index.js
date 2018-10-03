
const index = async ctx => {
    ctx.render('index.jade', {
        names: ['lenchu', 'admin']
    })
}

module.exports = {
    index
}
