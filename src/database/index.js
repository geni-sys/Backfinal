const Sequelize = require('sequelize'); // impede o sql injection por padrão
const dbConfig = require('../config/database');
const hooks = require('./hooks.js');

const User = require('../model/User');
const Issue = require('../model/Issue');
const Questions = require('../model/Questions');
const UserStatus = require('../model/UserStatus');
const Playlist = require('../model/Playlist');
const PlaylistAndIssue = require('../model/PlaylistAndIssue');
const Challenge = require('../model/Challenge');
const AdminChangeIssue = require('../model/AdminChangeIssue');
const IssuesMarked = require('../model/IssuesMarked');
const UserMarked = require('../model/UserMarked');
const Feedbacks = require('../model/Feedbacks');
const Notifications = require('../model/Notifications');

const connection = new Sequelize(dbConfig);

// "USER DEFINITION"
User.init(connection);
User.beforeCreate(hooks.useHashToCripto);

// "INITIAL DEFINITION"
Questions.init(connection);
Issue.init(connection);
UserStatus.init(connection);
Playlist.init(connection);
PlaylistAndIssue.init(connection);
Challenge.init(connection);
AdminChangeIssue.init(connection);
IssuesMarked.init(connection);
UserMarked.init(connection);
Feedbacks.init(connection);
Notifications.init(connection);

// "ASSOCIATIONS"
User.associate(connection.models);
Issue.associate(connection.models);
Playlist.associate(connection.models);
UserStatus.associate(connection.models);
Questions.associate(connection.models);
PlaylistAndIssue.associate(connection.models);
Challenge.associate(connection.models);
AdminChangeIssue.associate(connection.models);
IssuesMarked.associate(connection.models);
UserMarked.associate(connection.models);
Feedbacks.associate(connection.models);
Notifications.associate(connection.models);

module.exports = connection;
