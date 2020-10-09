/* eslint-disable comma-dangle */
/* eslint-disable quotes */
const routes = require("express").Router();

const ReportController = require("./controller/ReportController");
const authMidleware = require("./middlewares/auth");
const userAuthController = require("./controller/auth/UserAuthController");
const userController = require("./controller/UserController");
const QuestionsController = require("./controller/QuestionsController");
const issueController = require("./controller/IssueController");
const ScoresController = require("./controller/Scores/ScoresController");
const UserStatusController = require("./controller/UserStatusController");
const PlaylistController = require("./controller/PlaylistController");
const BoxController = require("./controller/Boxs/BoxController");
const BoxReportsController = require("./controller/Boxs/BoxReportsController");
const ChallengeController = require("./controller/ChallengeController");
const MarkedController = require("./controller/MarkedController");
const FeedbackController = require("./controller/FeedbackController");
const UserNotificationsController = require("./controller/Notifications/UserNotificationsController");
const AdminLogsController = require("./controller/AdminLogs/AdminLogsController");
// EXTRAX
const ExtraIssuesController = require("./controller/ExtraIssuesController");

// "AUTH USER"
routes.post("/:adm/register", userAuthController.store);
routes.post("/:isAdm/authenticate", userAuthController.login);
routes.post("/register", userAuthController.store);
routes.post("/authenticate", userAuthController.enter);
routes.get("/newToken/:user_id", authMidleware, userController.token);

// HANDLE ADMS FUNCTIONAL
routes.put(
  "/admin/:owner/demote/:admin_id",
  authMidleware,
  userController.demote
);

// "USER"
// routes.use(authMidleware)
routes.get("/users", authMidleware, userController.index);
routes.get("/users_query", authMidleware, userController.starry);
routes.get("/users_/:user_id", authMidleware, userController.getOneUserData);
routes.put("/users/:user_id/update", authMidleware, userController.update);
routes.put(
  "/users/:user_id/password/update",
  authMidleware,
  userController.password
);
routes.delete(
  "/users/:user_logado/delete",
  authMidleware,
  userController.destroy
);
routes.delete(
  "/admin/:admin/delete/user/:user_id",
  authMidleware,
  userController.delete
);

// "HANDLE QUESTIONS"
routes.post(
  "/users/:user_logado/questions",
  authMidleware,
  QuestionsController.store
);
routes.get(
  "/users/:user_logado/questions",
  authMidleware,
  QuestionsController.index
);

// "ISSUE"
routes.get("/user/:owner_id/issues", authMidleware, issueController.index);
routes.get(
  "/home/:owner_id/issues",
  authMidleware,
  issueController.getIssuesFiltereds
);
routes.get(
  "/issues/starry/:user_id/:issue_id",
  authMidleware,
  issueController.starry
);
routes.get("/issues", authMidleware, issueController.all);
routes.get("/issues_/featureds", authMidleware, issueController.features);
routes.get("/issues/:issue_id", authMidleware, issueController.unic);
routes.post("/user/:owner_id/new/issue", authMidleware, issueController.store);
routes.delete(
  "/admin/:admin_id/destroy/issue/:issue_id",
  authMidleware,
  issueController.destroy
);
routes.put(
  "/admin/:admin_id/edit/issue/:issue_id",
  authMidleware,
  issueController.edit
);

// SCORES
routes.get("/scores/:user_id", authMidleware, ScoresController.index);
routes.post("/scores/:user_id", authMidleware, ScoresController.store);
routes.put("/scores/:user_id", authMidleware, ScoresController.update);
routes.put(
  "/scores/issue/:user_id",
  authMidleware,
  ScoresController.updateIssue
);
routes.put("/scores/list/:user_id", authMidleware, ScoresController.updateList);
routes.put(
  "/scores/anotation/:user_id",
  authMidleware,
  ScoresController.updateAnotation
);

// "USER HANDLE STATUS"
routes.post("/user/:user_id/status", authMidleware, UserStatusController.store);
routes.get("/user/:user_id/status", authMidleware, UserStatusController.index);

// "HANDLE PLAYLIST"
routes.get("/playlists", authMidleware, PlaylistController.index);
routes.get(
  "/overview/:owner_id/playlists",
  authMidleware,
  PlaylistController.getListFiltereds
);
routes.get("/playlist/:list_id", authMidleware, PlaylistController.unc);
routes.get("/users/:user_id/lists", authMidleware, PlaylistController.unic);
routes.post(
  "/users/:user_id/create/playlist",
  authMidleware,
  PlaylistController.store
);
routes.post("/create/list/:id", authMidleware, PlaylistController.create);
routes.put("/playlists/:id/stars", authMidleware, PlaylistController.stars);
routes.put(
  "/playlists/:id/users_learning",
  authMidleware,
  PlaylistController.learning
);
routes.delete("/playlists/:list_id", authMidleware, PlaylistController.delete);

// HANDLE BOXs | REPORTS
routes.get("/boxs", authMidleware, BoxController.index);
routes.get("/boxs_reports/:user_id", authMidleware, BoxReportsController.index);
routes.post(
  "/boxs/:playlist/:sender/to/:guest",
  authMidleware,
  BoxController.store
);
routes.post(
  "/boxs_reports/:user_id",
  authMidleware,
  BoxReportsController.store
);

// "HANDLE CHALLENGES"
routes.get("/challenges", ChallengeController.index);
routes.post(
  "/users/:user_id/issues/:issue_id/new/challenges",
  ChallengeController.store
);

// "HANDLE REPORTS"
routes.get("/reports/:adminID", authMidleware, ReportController.index);
routes.post(
  "/reports/:adminID/delete/:issueID",
  authMidleware,
  ReportController.indexy
);
routes.post(
  "/reports/:adminID/edit/:issueID",
  authMidleware,
  ReportController.editI
);
routes.post(
  "/reports/:adminID/delete/:userID",
  authMidleware,
  ReportController.store
);

// MARKEDS
routes.post(
  "/user/:user_id/mark/issues/:issue_id",
  authMidleware,
  MarkedController.store
);
routes.post(
  "/user/:user_id/mark/playlists/:list_id",
  authMidleware,
  MarkedController.createPlaylists
);
routes.get(
  "/user/:user_id/marked/issues",
  authMidleware,
  MarkedController.index
);
routes.get(
  "/user/:user_id/issue/marked",
  authMidleware,
  MarkedController.unicIssue
);
routes.get(
  "/user/:user_id/users/marked",
  authMidleware,
  MarkedController.unicUser
);
routes.post(
  "/user/:owner/mark/users/:marked_id",
  authMidleware,
  MarkedController.create
);
routes.get(
  "/user/:owner/marked/users",
  authMidleware,
  MarkedController.initial
);
routes.get(
  "/user/:owner/marked/playlists",
  authMidleware,
  MarkedController.getListsMarkeds
);

// HANDLE FEEDBACK
routes.post("/feedbacks/:user_id", authMidleware, FeedbackController.store);
routes.get("/feedbacks", authMidleware, FeedbackController.index);
routes.get("/feedbacks/:feed", authMidleware, FeedbackController.unic);

// HANDLE EXTRAS methods
// USERS
routes.get("/counts/issues", authMidleware, ExtraIssuesController.index);
routes.get(
  "/counts/users",
  authMidleware,
  ExtraIssuesController.getUserFeatures
);
routes.get(
  "/counts/feedbacks",
  authMidleware,
  ExtraIssuesController.getFeedbackFeatures
);
routes.get(
  "/counts/lists",
  authMidleware,
  ExtraIssuesController.getListFeatures
);
// ----------- UPDATES
routes.put(
  "/configurate/user/:user_id/destaque",
  authMidleware,
  ExtraIssuesController.setUserAsFeatured
);
routes.put(
  "/configurate/issue/:issue_id/destaque",
  authMidleware,
  ExtraIssuesController.setIssueAsFeatured
);
routes.put(
  "/configurate/list/:list_id/destaque",
  authMidleware,
  ExtraIssuesController.setListAsFeatured
);

// HANDLE NOTIFICATIONS
routes.get("/notifications/:receiver", UserNotificationsController.index);
routes.post(
  "/notifications/:sender/to/:receiver",
  UserNotificationsController.store
);

// HANDLE ADMIN LOG
routes.get("/admin_logs/:admin", AdminLogsController.index);
routes.post("/admin_logs/:admin", AdminLogsController.store);

module.exports = routes;
