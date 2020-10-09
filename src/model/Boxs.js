/* eslint-disable quotes */
const { Model, DataTypes } = require("sequelize");

class Boxs extends Model {
  static init(sequelize) {
    super.init(
      {
        guest: DataTypes.INTEGER,
        sender: DataTypes.INTEGER,
        now: DataTypes.INTEGER,
        playlist: DataTypes.INTEGER,
        message: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "box",
      },
    );
  }

  static associate(models) {
    // "WITH ISSUE N-N"
    this.belongsTo(models.Playlist, {
      foreignKey: "playlist",
      as: "list",
    });
    this.belongsTo(models.User, {
      foreignKey: "sender",
      as: "enviar",
    });
    this.belongsTo(models.User, {
      foreignKey: "guest",
      as: "convidado",
    });
  }
}

module.exports = Boxs;
