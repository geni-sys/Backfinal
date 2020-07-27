module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('list_marked', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    list_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'playlist',
        key: 'id',
      },
      allowNull: false,
    },
    user_id: {
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('list_marked'),
};
