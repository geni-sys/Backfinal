module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('dashboard_excludeds', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_excludeds: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    playlist_excludeds: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false,
    },
    issue_excludeds: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('dashboard_excludeds'),
};
