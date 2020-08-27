const {
  Model,
  DataTypes,
} = require('sequelize');

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

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: 'questions_id',
      through: 'user_question',
      as: 'users',
    });
  }
}

module.exports = Questions;
