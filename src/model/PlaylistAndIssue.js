const {
  Model,
  DataTypes
} = require("sequelize");

class PlaylistAndIssue extends Model {
  static init(sequelize) {
    super.init({
      list: DataTypes.INTEGER,
      issue: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'playlist_and_issue'
    });
  }

  static associate(models) {
    // "WITH ISSUE 1-N"
    this.belongsTo(models.Issue, {
      foreignKey: 'issue',
      as: 'issues'
    })

    // WITH PLAYLIST 1-N
    this.belongsTo(models.Playlist, {
      foreignKey: 'list',
      as: 'lists'
    })
  }
}


module.exports = PlaylistAndIssue;
