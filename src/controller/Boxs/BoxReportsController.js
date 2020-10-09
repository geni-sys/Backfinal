/* eslint-disable camelcase */
/* eslint-disable quotes */
const BoxsReports = require("../../model/BoxsReports");
const User = require("../../model/User");

module.exports = {
  async index(request, response) {
    const { user_id } = request.params;

    let reports = null;
    try {
      const user_guest = await User.findByPk(user_id);
      if (!user_guest) {
        return response.status(400).json({ message: "User not found (...)" });
      }

      reports = await BoxsReports.findAll({
        where: {
          user_id,
        },
      });
    } catch (err) {
      console.log(err.message);
      return response.json(err.message);
    }
    return response.json(reports);
  },

  async store(request, response) {
    const { user_id } = request.params;
    const { report, playlist, guest } = request.body;

    try {
      const user_guest = await User.findByPk(user_id);
      if (!user_guest) {
        return response.status(400).json({ message: "User not found (...)" });
      }

      const reports = await BoxsReports.create({
        user_id,
        report,
        playlist,
        guest,
      });

      return response.json(reports);
    } catch (err) {
      console.log(err.message);
      return response.json(err.message);
    }
  },
};
