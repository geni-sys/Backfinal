const routes = require('express').Router();

const ReportController = require('./controller/ReportController');
const authMidleware = require('./middlewares/auth');
const userAuthController = require('./controller/auth/UserAuthController');
const userController = require('./controller/UserController');
const QuestionsController = require('./controller/QuestionsController');
const issueController = require('./controller/IssueController');
const UserStatusController = require('./controller/UserStatusController');
const PlaylistController = require('./controller/PlaylistController');
const ChallengeController = require('./controller/ChallengeController');
const MarkedController = require('./controller/MarkedController');

// "AUTH USER"
routes.post('/:adm/register', userAuthController.store);
routes.post('/:isAdm/authenticate', userAuthController.login);
routes.post('/register', userAuthController.store);
routes.post('/authenticate', userAuthController.login);

// "USER"
// routes.use(authMidleware)
routes.get('/users', authMidleware, userController.index);
routes.delete('/users/:user_logado/delete', authMidleware, userController.destroy);
routes.delete('/admin/:admin/delete/user/:user_id', authMidleware, userController.delete);

// "HANDLE QUESTIONS"
routes.post('/users/:user_logado/questions', authMidleware, QuestionsController.store);
routes.get('/users/:user_logado/questions', authMidleware, QuestionsController.index);

// "ISSUE"
routes.get('/user/:owner_id/issues', authMidleware, issueController.index);
routes.get('/issues', authMidleware, issueController.all);
routes.get('/issues/:issue_id', authMidleware, issueController.unic);
routes.post('/user/:owner_id/new/issue', authMidleware, issueController.store);
routes.delete('/admin/:admin_id/destroy/issue/:issue_id', authMidleware, issueController.destroy);
routes.put('/admin/:admin_id/edit/issue/:issue_id', authMidleware, issueController.edit);

// "USER HANDLE STATUS"
routes.post('/user/:user_id/status', authMidleware, UserStatusController.store);
routes.get('/user/:user_id/status', authMidleware, UserStatusController.index);

// "HANDLE PLAYLIST"
routes.get('/playlists', PlaylistController.index);
routes.get('/playlist/:list_id', PlaylistController.unc);
routes.get('/users/:user_id/lists', PlaylistController.unic);
routes.post('/users/:user_id/create/playlist', authMidleware, PlaylistController.store);
routes.post('/create/list/:id', authMidleware, PlaylistController.create);
routes.put('/playlists/:id/stars', PlaylistController.stars);
routes.put('/playlists/:id/users_learning', PlaylistController.learning);

// "HANDLE CHALLENGES"
routes.get('/challenges', ChallengeController.index);
routes.post('/users/:user_id/issues/:issue_id/new/challenges', ChallengeController.store);

// "HANDLE REPORTS"
routes.get('/reports/:adminID', authMidleware, ReportController.index);
routes.post('/reports/:adminID/delete/:issueID', authMidleware, ReportController.indexy);
routes.post('/reports/:adminID/edit/:issueID', authMidleware, ReportController.editI);
routes.post('/reports/:adminID/delete/:userID', authMidleware, ReportController.store);

// MARKEDS
routes.post('/user/:user_id/mark/lists/:list_id', MarkedController.store);
routes.get('/user/:user_id/marked/lists', MarkedController.index);

module.exports = routes;
