'use strict';

module.exports = {
  // up: (queryInterface, Sequelize) => {
  //   return queryInterface.createTable('user-status', {
  //     id: {
  //       type: Sequelize.INTEGER,
  //       primaryKey: true,
  //       autoIncrement: true,
  //       allowNull: false,
  //     },
  //     user: {
  //       type: Sequelize.INTEGER,
  //       allowNull: false,
  //     },
  //     issues_finalized: {
  //       type: Sequelize.STRING,
  //     },
  //     current_issue: {
  //       type: Sequelize.STRING,
  //     },
  //     desc_user: {
  //       type: Sequelize.STRING,
  //     },
  //     issues_created: {
  //       type: Sequelize.STRING,
  //       get() {
  //         return this.getDataValue('issues_created').split(';')
  //       },
  //       set(val) {
  //         this.setDataValue('issues_created', val.join(';'));
  //       },
  //     },
  //     badge_user: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //     },
  //     approximations: {
  //       type: Sequelize.INTEGER,
  //       allowNull: false,
  //     },
  //     approximate: {
  //       type: Sequelize.INTEGER,
  //       allowNull: false,
  //     }
  //   });
  // },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user-status');
  }
};
