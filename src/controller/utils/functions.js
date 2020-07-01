/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

module.exports = {
  generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
      expiresIn: 86400, // 1 dia
    });
  },

  // verifica se o user logado é o mesmo que esta requerindo algo
  verifyAuthencite(user_logado, req, res) {
    if (!(Number(user_logado) === Number(req.userID))) {
      try {
        return res.status(400).json({
          error: 'Only can control your activits!',
        });
      } catch (err) {
        console.log(err.message);
        return res.status(400).json({
          error: 'Connection uncaught!',
        });
      }
    }

    return 0;
  },

  // verifica se é admin
  isAdmin(admin, response) {
    if (!admin) {
      return response.status(400).json({
        message: '[100] You need > Create an account',
      });
    }
    if (!admin.canny) {
      return response.status(400).json({
        message: 'Only admin can delete an issue. Do a requisition for an admin',
      });
    }

    return 0;
  },
};
