/* eslint-disable no-console */
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
        include: [
          {
            association: "enviar",
            attributes: ["id", "name", "email", "github"],
          },
          {
            association: "convidado",
            attributes: ["id", "name", "email", "github"],
          },
          {
            association: "agora",
            attributes: ["id", "name", "email", "github"],
          },
        ],
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
    const { message, now } = request.body;

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

      const boxVerification = await Boxs.findAll({
        where: {
          playlist,
          guest,
          sender,
        },
      });

      if (message === '...') {
        if (!(boxVerification.length === 0)) {
          return response.send(boxVerification);
        }
      }

      const box = await Boxs.create({
        playlist,
        guest,
        sender,
        now,
        message,
      });

      return response.json(box);
    } catch (err) {
      console.log(err.message);
      return response.json(err.message);
    }
  },
};
