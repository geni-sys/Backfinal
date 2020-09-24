/* eslint-disable quotes */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("scores", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      owner: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: true,
      },
      issues_createds: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lists_createds: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      anotations: {
        type: Sequelize.INTEGER,
        allowNull: true,
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable("scores"),
};
