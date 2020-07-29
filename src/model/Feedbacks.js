const {
  Model,
  DataTypes,
} = require('sequelize');

class Feedbacks extends Model {
  static init(sequelize) {
    super.init({
      user_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      message: DataTypes.TEXT,
      stars: DataTypes.INTEGER,
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

module.exports = Feedbacks;
