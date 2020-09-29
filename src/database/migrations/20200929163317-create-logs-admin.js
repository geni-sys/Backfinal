/* eslint-disable quotes */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("admin_logs", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      admin: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        allowNull: false,
      },
      issues_updateds: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lists_updateds: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      any_updateds: {
        type: Sequelize.STRING,
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable("admin_logs"),
};
