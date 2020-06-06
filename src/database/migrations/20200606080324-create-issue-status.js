'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('status_user', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      complete_issues: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      current_issue: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      desc_user: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      issue_createds: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      badge: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      approximations: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      approximate: {
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
    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('status_user');

  }
};
