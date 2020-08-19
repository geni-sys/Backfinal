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

  static associate() {
    // this.belongsTo(models.User, {
    //   foreignKey: 'user_id',
    //   as: 'user',
    // });
  }
}

module.exports = Notifications;
