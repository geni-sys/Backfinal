/* eslint-disable quotes */
const { Model, DataTypes } = require("sequelize");

class BoxsReports extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.INTEGER,
        guest: DataTypes.STRING,
        playlist: DataTypes.STRING,
        report: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "boxs_reports",
      },
    );
  }

  static associate(models) {
    // "WITH ISSUE 1-N"
    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "self",
    });
  }
}

module.exports = BoxsReports;
