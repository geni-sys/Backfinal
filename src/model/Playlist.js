const {
  Model,
  DataTypes
} = require("sequelize");

class Playlist extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'Playlist'
    });
  }

  static associate(models) {
    // "WITH ISSUE N-N"
    this.belongsToMany(models.Issue, {
      foreignKey: 'list',
      through: 'playlist_and_issue',
      as: 'issues'
    })

    // WITH USER 1-N
    this.belongsTo(models.User, {
      foreignKey: 'owner',
      as: 'user'
    })

    // WITH PLAYLISTandISSUE 1-N
    this.belongsTo(models.PlaylistAndIssue, {
      foreignKey: 'id',
      as: 'list_issue',
    })
  }
}

/**
 * belongsTo:
 * ::foreignKey: a coluna dentro de Playlist que representa o suário
 */


module.exports = Playlist;
