'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('shared_learning', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      learning: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_one: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refereces: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
      },
      user_two: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refereces: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
      },
      status_one: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status_two: {
        type: Sequelize.STRING,
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

    return queryInterface.dropTable('shared_learning');
  }
};
