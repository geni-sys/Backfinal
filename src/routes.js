const routes = require('express').Router()

const authMidleware = require('./middlewares/auth')
const userAuthController = require('./controller/auth/UserController')
const userController = require('./controller/UserController')

// "AUTH USER"
routes.post('/register', userAuthController.store)
routes.post('/authenticate', userAuthController.login)

// "USER"
// routes.use(authMidleware)
routes.get('/users', authMidleware, userController.index)
routes.post('/users/delete', authMidleware, userController.destroy)


module.exports = routes
