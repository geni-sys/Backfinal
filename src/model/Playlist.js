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

  // "WITH ISSUE N-N"
  static associate(models) {
    this.belongsToMany(models.Issue, {
      foreignKey: 'list',
      through: 'playlist_and_issue',
      as: 'issues'
    })
  }

}


module.exports = Playlist;
