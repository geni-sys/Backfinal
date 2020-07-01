module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('playlist_and_issue', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    list: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'playlist',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    issue: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'issue',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('playlist_and_issue'),
};
