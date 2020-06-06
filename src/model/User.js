const {
  Model,
  DataTypes
} = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      canny: DataTypes.BOOLEAN,
    }, {
      sequelize,
    });
  }

  // "ISSUE RELATION"
  static associateIssue(models) {
    this.hasMany(models.Issue, {
      foreignKey: 'owner',
      as: 'issues'
    })
  }

  // "QUESTION RELATION"
  static associate(models) {
    this.belongsToMany(models.Questions, {
      foreignKey: 'user_id',
      through: 'user_question',
      as: 'questions'
    })
  }
}


module.exports = User;
