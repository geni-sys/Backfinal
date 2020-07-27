const {
  Model,
  DataTypes,
} = require('sequelize');

class UserStatus extends Model {
  static init(sequelize) {
    super.init({
      complete_issues: DataTypes.STRING,
      current_issue: DataTypes.STRING,
      desc_user: DataTypes.STRING,
      issue_createds: DataTypes.STRING,
      badge: DataTypes.STRING,
      approximations: DataTypes.STRING,
      approximate: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'status_user',
    });
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'status',
    });
  }
}

module.exports = UserStatus;
