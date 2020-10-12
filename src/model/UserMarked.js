/* eslint-disable quotes */
const { Model, DataTypes } = require("sequelize");

class UserMarked extends Model {
  static init(sequelize) {
    super.init(
      {
        owner: DataTypes.INTEGER,
        user_mark: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "user_marked",
      },
    );
  }

  static associate(models) {
    // "WITH ISSUE 1-N"
    this.belongsTo(models.User, {
      foreignKey: "owner",
      as: "self",
    });

    // WITH PLAYLIST 1-N
    this.belongsTo(models.User, {
      foreignKey: "user_mark",
      as: "marked",
    });
  }
}

module.exports = UserMarked;
