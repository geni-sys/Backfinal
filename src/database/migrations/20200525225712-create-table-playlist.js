'use strict';

module.exports = {
  // up: (queryInterface, Sequelize) => {
  //   return queryInterface.createTable('playlist', {
  //     id: {
  //       type: Sequelize.INTEGER,
  //       primaryKey: true,
  //       autoIncrement: true,
  //       allowNull: false,
  //     },
  //     owner_list: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //     },
  //     name: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //     },
  //     issues: {
  //       type: Sequelize.STRING,
  //       allowNull: false,
  //       get() {
  //         return this.getDataValue('issues').split(';')
  //       },
  //       set(val) {
  //         this.setDataValue('issues', val.join(';'));
  //       },
  //     },
  //   });

  // },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('playlist');
  }
};
