const {
  Model,
  DataTypes,
} = require('sequelize');

class Notifications extends Model {
  static init(sequelize) {
    super.init({
      sender: DataTypes.INTEGER,
      receiver: DataTypes.INTEGER,
      transcription: DataTypes.STRING,
      state: DataTypes.STRING,
      type: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'sender',
      as: 'de',
    });

    this.belongsTo(models.User, {
      foreignKey: 'receiver',
      as: 'para',
    });
  }
}

module.exports = Notifications;
