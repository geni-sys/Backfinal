const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const hooks = require('./hooks.js')

const User = require('../model/User')
const Questions = require('../model/Questions')

const connection = new Sequelize(dbConfig)

// "USER DEFINITION"
User.init(connection)
User.beforeCreate(hooks.useHashToCripto)

// "QUESTIONS DEFINITION"
Questions.init(connection)

module.exports = connection
