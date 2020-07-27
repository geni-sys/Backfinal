const bcrypt = require('bcrypt');

module.exports = {
  async useHashToCripto(user) {
    const hash = await bcrypt.hash(user.password, 10);

    user.password = hash;

    return hash;
  },
};
