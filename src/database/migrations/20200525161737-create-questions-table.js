'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      experience: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tool: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      use_case: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      interests: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('questions');
  }
};
