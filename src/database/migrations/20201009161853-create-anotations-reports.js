module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('boxs_reports', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    guest: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    playlist: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    report: {
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('boxs_reports'),
};
