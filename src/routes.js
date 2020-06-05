const routes = require('express').Router()

const authMidleware = require('./middlewares/auth')
const userAuthController = require('./controller/auth/UserAuthController')
const userController = require('./controller/UserController')

// "AUTH USER"
routes.post('/register', userAuthController.store)
routes.post('/authenticate', userAuthController.login)

// "USER"
// routes.use(authMidleware)
routes.get('/users', authMidleware, userController.index)
routes.delete('/users/:user_logado/delete', authMidleware, userController.destroy)
// "SET QUESTIONS"
routes.post('/users/:user_logado/questions', authMidleware, userController.setQuestion)



module.exports = routes
