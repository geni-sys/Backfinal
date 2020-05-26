'use strict';

module.exports = {
  // up: (queryInterface, Sequelize) => {
  //   return queryInterface.createTable('shared_learnig', {
  //     id: {
  //       type: Sequelize.INTEGER,
  //       primaryKey: true,
  //       autoIncrement: true,
  //       allowNull: false,
  //     },
  //     user_one: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //     },
  //     user_two: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //     },
  //     status_one: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //     },
  //     status_two: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //     },
  //     issue_learing: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //     }
  //   });
  // },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('shared_learnig');

  }
};

/**
 * get() {
          return this.getDataValue('issues_created').split(';')
        },
        set(val) {
          this.setDataValue('issues_created', val.join(';'));
        },
 */
