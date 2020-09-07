const { Model, DataTypes } = require("sequelize");

class Issue extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        body: DataTypes.TEXT,
        tags: DataTypes.STRING,
        language: DataTypes.STRING,
        link: DataTypes.STRING,
        featured: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: "issue",
      }
    );
  }

  // "USER RELATION 1-N"
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "owner",
      as: "user",
    });

    // "PLAYLIST RELATION N-N"
    this.belongsToMany(models.Playlist, {
      foreignKey: "issue",
      through: "playlist_and_issue",
      as: "lists",
    });
  }
}

/**
 * belengsToMany:
 * ::foreighKey: a chave dentro da tabela relacionando [ N - N ]
 */

module.exports = Issue;
