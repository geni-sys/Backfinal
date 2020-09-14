/* eslint-disable quotes */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("questions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      experience: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tool: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      use_case: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      interests: {
        type: Sequelize.STRING,
        allowNull: false,
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable("questions"),
};
