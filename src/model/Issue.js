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

  // "PLAYLIST RELATION N-N"
  static associateList(models) {
    this.belongsToMany(models.Playlist, {
      foreignKey: 'user_id',
      through: 'playlist_and_issue',
      as: 'list'
    })
  }

}


module.exports = Issue
