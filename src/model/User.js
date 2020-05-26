const bcrypt = require("bcrypt");

const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

// User.beforeCreate((next) => {
//   const hash = await bcrypt.hash(this.password, 10)
//   this.password = hash

//   next();
// })

module.exports = User;
