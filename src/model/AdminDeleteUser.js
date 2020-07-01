const {
  Model,
  DataTypes,
} = require('sequelize');

class AdminDeleteUser extends Model {
  static init(sequelize) {
    super.init({
      admin_id: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'admin_delete_user',
    });
  }

  static associate(models) {
    // "ISSUE RELATION 1-N"
    this.belongsTo(models.User, {
      foreignKey: 'user',
      as: 'creator',
    });

    // "USER RELATION 1-N"
    this.belongsTo(models.Issue, {
      foreignKey: 'issue',
      as: 'resolve',
    });
  }
}

module.exports = AdminDeleteUser;
