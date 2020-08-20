/* eslint-disable no-console */
/* eslint-disable camelcase */
const User = require('../../model/User');
const Notifications = require('../../model/Notifications');

module.exports = {
  // "LISTAR NOTIFICATIONS OF UNIC USER"
  async index(request, response) {
    const {
      receiver,
    } = request.params;

    try {
      const snd = await User.findByPk(receiver);
      if (!snd) {
        return response.status(400).send({
          error: 'User dont exists',
        });
      }

      const notification = await Notifications.findAll({
        attributes: {
          exclude: ['createdAt'],
        },
        where: {
          receiver,
        },
        include: [{
          association: 'de',
          attributes: ['id', 'name', 'email'],
        }, {
          association: 'para',
          attributes: ['id', 'name', 'email'],
        }],
      });

      return response.json(notification);
    } catch (err) {
      console.warn(err);
      return response.status(404).send({
        error: err.message,
      });
    }

    // return response.status(404).send({
    //   error: 'Bad request',
    // });
  },

  async store(request, response) {
    const {
      sender,
      receiver,
    } = request.params;
    const {
      transcription,
      state,
      type,
    } = request.body;

    try {
      const rcv = await User.findByPk(receiver);
      if (!rcv) {
        return response.status(400).send({
          error: 'Receiver dont exists',
        });
      }

      const notification = await Notifications.create({
        sender,
        receiver,
        transcription,
        state,
        type,
      });

      return response.json(notification);
    } catch (err) {
      console.warn(err);
      return response.status(404).send({
        error: err.message,
      });
    }

    // return response.status(404).send({
    //   error: 'Bad request',
    // });
  },

};
