const User = require('../model/User');
const UserStatus = require('../model/UserStatus');

module.exports = {
  // "LISTAR STATUS OF USER"
  async index(req, res) {
    const {
      user_id,
    } = req.params;

    const user = await User.findByPk(user_id, {
      include: {
        association: 'u_status',
      },
    });

    return res.json(user.u_status);
  },

  // "SET STATUS OF USER"
  async store(req, res) {
    const {
      user_id,
    } = req.params;
    const {
      complete_issue,
      current_issue,
      desc_user,
      issue_createds,
      badge,
      approximations,
      approximate,
    } = req.body;

    if (!await User.findByPk(user_id)) {
      return res.status(400).json({
        message: 'Error user not found',
      });
    }

    const userStatus = await UserStatus.create({
      user: user_id,
      complete_issue,
      current_issue,
      desc_user,
      issue_createds,
      badge,
      approximations,
      approximate,
    });

    return res.json(userStatus);
  },

};
