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
    this.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'list',
    })
  }

  static associateIssue(models) {
    this.belongsTo(models.Issue, {
      foreignKey: 'id',
      as: 'issues',
    })
  }
}


module.exports = Playlist;
