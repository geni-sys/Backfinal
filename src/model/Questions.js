const {
  Model,
  DataTypes
} = require("sequelize");

class Questions extends Model {
  static init(sequelize) {
    super.init({
      experience: DataTypes.STRING,
      tool: DataTypes.STRING,
      use_case: DataTypes.STRING,
      interests: DataTypes.STRING,
    }, {
      sequelize,
    });
  }
}


module.exports = Questions;
