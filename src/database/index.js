const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const hooks = require('./hooks.js')

const User = require('../model/User')
const Issue = require('../model/Issue')
const Questions = require('../model/Questions')
const UserStatus = require('../model/UserStatus')

const connection = new Sequelize(dbConfig)

// "USER DEFINITION"
User.init(connection)
User.beforeCreate(hooks.useHashToCripto)

// "QUESTIONS DEFINITION"
Questions.init(connection)

// "ISSUE DEFINITION"
Issue.init(connection)

// "STATUS DEFINITION"
UserStatus.init(connection)

// "ASSOCIATIONS"
User.associate(connection.models)
User.associateIssue(connection.models)
Questions.associate(connection.models)
Issue.associate(connection.models)
UserStatus.associate(connection.models)


module.exports = connection
