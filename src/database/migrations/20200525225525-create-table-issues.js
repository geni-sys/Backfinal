'use strict';

module.exports = {
  // up: (queryInterface, Sequelize) => {
  //   return queryInterface.createTable('issues', {
  //     id: {
  //       type: Sequelize.INTEGER,
  //       primaryKey: true,
  //       autoIncrement: true,
  //       allowNull: false,
  //     },
  //     owner: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //     },
  //     title: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //     },
  //     body: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //     },
  //     tags: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //       get() {
  //         return this.getDataValue('tags').split(';')
  //       },
  //       set(val) {
  //         this.setDataValue('tags', val.join(';'));
  //       },
  //     },
  //     language: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //     },
  //     link: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //     }
  //   });
  // },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('issues');
  }
};
