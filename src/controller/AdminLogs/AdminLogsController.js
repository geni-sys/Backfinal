/* eslint-disable camelcase */
/* eslint-disable quotes */
const AdminLogs = require("../../model/AdminLogs");
const User = require("../../model/User");

module.exports = {
  async index(request, response) {
    const { admin } = request.params;

    let adminLogs = null;
    try {
      adminLogs = await AdminLogs.findAll({
        where: { admin },
      });
    } catch (err) {
      console.log(err.message);
    }

    return response.json(adminLogs);
  },

  async store(request, response) {
    const { admin } = request.params;
    const { issues_logs, lists_logs, any_logs } = request.body;

    let adminLogs = null;
    try {
      const user = await User.findByPk(admin);
      if (!user) {
        return response.status(403).json({ error: "User do not exist" });
      }

      if (!user.canny) {
        return response.status(403).json({ error: "Only admins" });
      }

      // console.log(issues_logs, lists_logs, any_logs);

      adminLogs = await AdminLogs.create({
        admin,
        issues_updateds: String(issues_logs),
        lists_updateds: String(lists_logs),
        any_updateds: String(any_logs),
      });
    } catch (err) {
      console.log(err.message);
    }

    return response.json(adminLogs);
  },
};
