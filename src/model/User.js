/* eslint-disable quotes */
const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        github: DataTypes.STRING,
        canny: DataTypes.BOOLEAN,
        completed: DataTypes.BOOLEAN,
        destaque: DataTypes.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    // "ISSUE RELATION 1-N"
    this.hasMany(models.Issue, {
      foreignKey: "owner",
      as: "issues",
    });

    // "ISSUE RELATION 1-N"
    // this.hasMany(models.Feedbacks, {
    //   foreignKey: 'user_id',
    //   as: 'feedback',
    // });

    // "STATUS RELATION 1-N" || so quando for necessário
    this.hasMany(models.UserStatus, {
      foreignKey: "user",
      as: "u_status",
    });

    // "QUESTION RELATION N-N "
    this.belongsToMany(models.Questions, {
      foreignKey: "user_id",
      through: "user_question",
      as: "questions",
    });

    // "PLAYLIST RELATION 1-N"
    this.hasMany(models.Playlist, {
      foreignKey: "owner",
      as: "lists",
    });
  }
}

/**
 * [model: USER]
 * hasMany: 1-N
 * :: foreignKey: campo de identificação do model onde se relaciona
 *
 * .hasMany(list, { foreignKey: 'id_na_list' })
 * ----------------------------------
 *
 * [model: LIST]
 * belongsTo: 1-N
 * :: foreignKey: campo de indentificação do model atual
 *
 * .belongsTo(User, { foreignKey: 'id_da_tabela_atual: list' })
 */

module.exports = User;
