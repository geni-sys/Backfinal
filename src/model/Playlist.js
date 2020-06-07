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

  }

}


module.exports = Playlist;
