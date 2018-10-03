const Sequelize = require('sequelize')
const mysql = require('./mysql')

const Account = mysql.define('account', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    accName: {
        type: Sequelize.STRING(64)
    },
    username: {
        type: Sequelize.STRING(64)
    },
    password: {
        type: Sequelize.STRING(64)
    },
    homepage: {
        type: Sequelize.STRING(128)
    },
    comment: {
        type: Sequelize.TEXT
    }
})

module.exports = Account
