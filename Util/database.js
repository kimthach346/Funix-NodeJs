const Sequelize = require('sequelize')

const seq = new Sequelize('my-node-app', 'root', 'kimthach346', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = seq