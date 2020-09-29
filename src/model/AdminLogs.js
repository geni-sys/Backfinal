/* eslint-disable quotes */
const { Model, DataTypes } = require("sequelize");

class AdminLogs extends Model {
  static init(sequelize) {
    super.init(
      {
        admin: DataTypes.INTEGER,
        issues_updateds: DataTypes.STRING,
        lists_updateds: DataTypes.STRING,
        any_updateds: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "admin_logs",
      }
    );
  }

  static associate(models) {
    // "WITH ISSUE 1-N"
    this.belongsTo(models.User, {
      foreignKey: "admin",
      as: "user",
    });
  }
}

module.exports = AdminLogs;
