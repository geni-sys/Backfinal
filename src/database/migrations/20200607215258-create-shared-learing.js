module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('shared_learning', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    learning: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'issue',
        key: 'id',
      },
      onUpdate: 'CASCADE',
    },
    user_one: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
    },
    user_two: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
    },
    status_one: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status_two: {
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('shared_learning'),
};
