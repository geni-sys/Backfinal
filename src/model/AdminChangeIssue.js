const { Model, DataTypes } = require("sequelize");

class AdminChangeIssue extends Model {
  static init(sequelize) {
    super.init(
      {
        admin_id: DataTypes.INTEGER,
        issue_editada: DataTypes.INTEGER,
        issue_deletada: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "admin_change_issue",
      }
    );
  }

  static associate(models) {
    // WITH USER: 1 - N
    this.belongsTo(models.User, {
      foreignKey: "admin_id",
      as: "admin",
    });

    // WITH USER: 1 - N
    this.belongsTo(models.Issue, {
      foreignKey: "issue_editada",
      as: "changed",
    });

    // WITH USER 1 - N
    this.belongsTo(models.Issue, {
      foreignKey: "issue_deletada",
      as: "excluded",
    });
  }
}

module.exports = AdminChangeIssue;
