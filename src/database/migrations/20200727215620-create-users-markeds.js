module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user_marked', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    owner: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      allowNull: false,
    },
    user_mark: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('user_marked'),
};
