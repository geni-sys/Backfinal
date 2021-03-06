const {
  Model,
  DataTypes,
  // eslint-disable-next-line quotes
} = require("sequelize");

class Challenge extends Model {
  static init(sequelize) {
    super.init({
      body: DataTypes.STRING,
      tips: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'challenges',
    });
  }

  static associate(models) {
    // "ISSUE RELATION 1-N"
    this.belongsTo(models.User, {
      foreignKey: 'user',
      as: 'creator',
    });

    // "USER RELATION 1-N"
    this.belongsTo(models.Issue, {
      foreignKey: 'issue',
      as: 'resolve',
    });
  }
}

module.exports = Challenge;
