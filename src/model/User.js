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

  // "ISSUE RELATION 1-N"
  static associateIssue(models) {
    this.hasMany(models.Issue, {
      foreignKey: 'owner',
      as: 'issues'
    })
  }

  // "STATUS RELATION 1-N"
  static associateStatus(models) {
    this.hasMany(models.UserStatus, {
      foreignKey: 'user',
      as: 'u_status'
    })
  }

  // "QUESTION RELATION N-N "
  static associate(models) {
    this.belongsToMany(models.Questions, {
      foreignKey: 'user_id',
      through: 'user_question',
      as: 'questions'
    })
  }

  // "PLAYLIST RELATION 1-N"
  static associatePlaylist(models) {}
}


module.exports = User;
