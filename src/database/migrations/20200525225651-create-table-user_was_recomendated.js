'use strict';

module.exports = {
  // up: (queryInterface, Sequelize) => {

  //   return queryInterface.createTable('user_was_recommendated', {
  //     id: {
  //       type: Sequelize.INTEGER,
  //       primaryKey: true,
  //       autoIncrement: true,
  //       allowNull: false,
  //     },
  //     id_user: {
  //       type: Sequelize.INTEGER,
  //       allowNull: false,
  //     },
  //     id_recommendation: {
  //       type: Sequelize.INTEGER,
  //       allowNull: false,
  //     }
  //   });

  // },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('user_was_recommendated');

  }
};
