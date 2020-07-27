const {
  Model,
  DataTypes,
} = require('sequelize');

class ListMarked extends Model {
  static init(sequelize) {
    super.init({
      list_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'list_marked',
    });
  }

  static associate(models) {
    // "WITH ISSUE 1-N"
    this.belongsTo(models.Playlist, {
      foreignKey: 'list_id',
      as: 'list',
    });

    // WITH PLAYLIST 1-N
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

module.exports = ListMarked;
