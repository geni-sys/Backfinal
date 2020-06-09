const routes = require('express').Router()

const authMidleware = require('./middlewares/auth')
const userAuthController = require('./controller/auth/UserAuthController')
const userController = require('./controller/UserController')
const QuestionsController = require('./controller/QuestionsController')
const issueController = require('./controller/IssueController')
const UserStatusController = require('./controller/UserStatusController')
const PlaylistController = require('./controller/PlaylistController')
const ChallengeController = require('./controller/ChallengeController')

// "AUTH USER"
routes.post('/:adm/register', userAuthController.store)
routes.post('/register', userAuthController.store)
routes.post('/authenticate', userAuthController.login)

// "USER"
// routes.use(authMidleware)
routes.get('/users', authMidleware, userController.index)
routes.delete('/users/:user_logado/delete', authMidleware, userController.destroy)

// "HANDLE QUESTIONS"
routes.post('/users/:user_logado/questions', authMidleware, QuestionsController.store)
routes.get('/users/:user_logado/questions', authMidleware, QuestionsController.index)

// "ISSUE"
routes.get('/user/:owner_id/issues', authMidleware, issueController.index)
routes.post('/user/:owner_id/new/issue', authMidleware, issueController.store)
routes.delete('/admin/:admin_id/destroy/issue/:issue_id', authMidleware, issueController.destroy)

// "USER HANDLE STATUS"
routes.post('/user/:user_id/status', authMidleware, UserStatusController.store)
routes.get('/user/:user_id/status', authMidleware, UserStatusController.index)

// "HANDLE PLAYLIST"
routes.get('/playlists', PlaylistController.index)
routes.get('/users/:user_id/lists', PlaylistController.unic)
routes.post('/users/:user_id/create/playlist', authMidleware, PlaylistController.store)
routes.post('/create/list', authMidleware, PlaylistController.create)

// "HANLE CHALLENGES"
routes.get('/challenges', ChallengeController.index)
routes.post('/users/:user_id/issues/:issue_id/new/challenges', ChallengeController.store)


module.exports = routes
