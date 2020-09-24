/* eslint-disable quotes */
const { Model, DataTypes } = require("sequelize");

class Issue extends Model {
  static init(sequelize) {
    super.init(
      {
        owner: DataTypes.NUMBER,
        issues_createds: DataTypes.NUMBER,
        lists_createds: DataTypes.NUMBER,
        anotations: DataTypes.NUMBER,
      },
      {
        sequelize,
        tableName: "scores",
      }
    );
  }

  // "USER RELATION 1-N"
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "owner",
      as: "user",
    });
  }
}

/**
 * belengsToMany:
 * ::foreighKey: a chave dentro da tabela relacionando [ N - N ]
 */

module.exports = Issue;
