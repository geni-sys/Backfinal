module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('playlist', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    owner: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    stars: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    users_learning: {
      type: Sequelize.INTEGER,
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('playlist'),
};
