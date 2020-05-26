'use strict';

module.exports = {
  // up: (queryInterface, Sequelize) => {

  //   return queryInterface.createTable('recommendations', {
  //     id: {
  //       type: Sequelize.INTEGER,
  //       primaryKey: true,
  //       autoIncrement: true,
  //       allowNull: false,
  //     },
  //     title: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //     },
  //     who_use: {
  //       type: Sequelize.INTEGER,
  //       allowNull: false,
  //     }
  //   });
  // },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('recommendations');

  }
};
