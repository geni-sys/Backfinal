const {
  Model,
  DataTypes,
  // eslint-disable-next-line quotes
} = require("sequelize");

class DashboardExcludeds extends Model {
  static init(sequelize) {
    super.init({
      user_excludeds: DataTypes.INTEGER,
      playlist_excludeds: DataTypes.INTEGER,
      issue_excludeds: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'dashboard_excludeds',
    });
  }
}

module.exports = DashboardExcludeds;
