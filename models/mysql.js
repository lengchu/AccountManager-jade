const Sequelize = require('sequelize')
const { db } = require('../config')

const mysql = new Sequelize({
    username: db.username,
    password: db.password,
    database: db.database,
    dialect: 'mysql',
    host: db.host,
    port: db.port,
    define: {
        charset: 'UTF-8',
        freezeTableName: true,
        timestamps: false,
        version: false
    }
})

module.exports = mysql
