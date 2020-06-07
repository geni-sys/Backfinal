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

  // "USER RELATION 1-N"
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'owner',
      as: 'user'
    })
  }

  // "PLAYLIST RELATION 1-N"
  static associateList(models) {
    this.belongsTo(models.Playlist, {
      foreignKey: 'issues',
      as: 'i_list'
    })
  }
}


module.exports = Issue
