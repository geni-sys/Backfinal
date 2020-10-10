/* eslint-disable quotes */
/**
 * Table of Auth
 */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable("users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    github: {
      type: Sequelize.STRING,
      allowNull: true,
      default: "",
    },
    canny: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    completed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      default: false,
    },
    destaque: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      default: false,
    },
    excluded: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      default: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable("users"),
};
