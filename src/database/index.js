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
const ListMarked = require('../model/ListMarked');

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
ListMarked.init(connection);

// "ASSOCIATIONS"
User.associate(connection.models);
Issue.associate(connection.models);
Playlist.associate(connection.models);
UserStatus.associate(connection.models);
Questions.associate(connection.models);
PlaylistAndIssue.associate(connection.models);
Challenge.associate(connection.models);
AdminChangeIssue.associate(connection.models);
ListMarked.associate(connection.models);

module.exports = connection;
