'use strict';

module.exports = {
  // up: (queryInterface, Sequelize) => {
  //   return queryInterface.createTable('playlist_constain_issue', {
  //     id: {
  //       type: Sequelize.INTEGER,
  //       primaryKey: true,
  //       autoIncrement: true,
  //       allowNull: false,
  //     },
  //     id_playlist: {
  //       type: Sequelize.INTEGER,
  //       allowNull: false,
  //     },
  //     id_issue: {
  //       type: Sequelize.INTEGER,
  //       allowNull: false,
  //     },
  //   });
  // },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('playlist_constain_issue');

  }
};
