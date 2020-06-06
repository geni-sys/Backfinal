const {
  Model,
  DataTypes
} = require('sequelize')

class Issue extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      tags: DataTypes.STRING,
      language: DataTypes.STRING,
      link: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'issue'
    })
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'owner',
      as: 'user'
    })
  }
}


module.exports = Issue
