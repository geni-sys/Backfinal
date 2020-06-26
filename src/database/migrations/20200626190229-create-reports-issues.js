module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('admin_change_issue', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    admin_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    issue_deletada: {
      type: Sequelize.INTEGER,
      references: {
        model: 'issue',
        key: 'id',
      },
      allowNull: false,
    },
    issue_editada: {
      type: Sequelize.INTEGER,
      references: {
        model: 'issue',
        key: 'id',
      },
      onUpdate: 'CASCADE',
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('admin_change_issue'),
};
