/* eslint-disable camelcase */
/* eslint-disable quotes */
const Boxs = require("../../model/Boxs");
const User = require("../../model/User");

module.exports = {
  async index(request, response) {
    const { playlist, guest, sender } = request.query;

    let box = null;
    try {
      const user_guest = await User.findByPk(guest);
      if (!user_guest) {
        return response.status(400).json({ message: "User not found (GUEST)" });
      }
      const user_sender = await User.findByPk(sender);
      if (!user_sender) {
        return response
          .status(400)
          .json({ message: "User not found (SENDER)" });
      }

      box = await Boxs.findAll({
        where: {
          playlist,
          guest,
          sender,
        },
      });
    } catch (err) {
      console.log(err.message);
      return response.json(err.message);
    }
    return response.json(box);
  },

  async store(request, response) {
    const { playlist, guest, sender } = request.params;
    const { message } = request.body;

    try {
      const user_guest = await User.findByPk(guest);
      if (!user_guest) {
        return response.status(400).json({ message: "User not found (GUEST)" });
      }
      const user_sender = await User.findByPk(sender);
      if (!user_sender) {
        return response
          .status(400)
          .json({ message: "User not found (SENDER)" });
      }

      const box = await Boxs.create({
        playlist,
        guest,
        sender,
        message,
      });

      return response.json(box);
    } catch (err) {
      console.log(err.message);
      return response.json(err.message);
    }
  },
};
