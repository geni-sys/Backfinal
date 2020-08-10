const {
  Model,
  DataTypes,
} = require('sequelize');

class ListMarked extends Model {
  static init(sequelize) {
    super.init({
      issue_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'issues_marked',
    });
  }

  static associate(models) {
    // "WITH ISSUE 1-N"
    this.belongsTo(models.Issue, {
      foreignKey: 'issue_id',
      as: 'issue',
    });

    // WITH PLAYLIST 1-N
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

module.exports = ListMarked;
