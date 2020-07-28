/* eslint-disable camelcase */
const {
  Op,
} = require('sequelize');
const User = require('../model/User');

module.exports = {
  // "LISTAR USUÁRIOS"
  async index(req, res) {
    const {
      query,
    } = req.query;

    let users = null;
    try {
      if (!query) {
        users = await User.findAll({
          attributes: {
            exclude: ['password'],
          },
        });
      } else {
        users = await User.findAll({
          attributes: {
            exclude: ['password', 'canny', 'createdAt', 'updatedAt'],
          },
          where: {
            name: {
              [Op.like]: `%${query}%`,
            },
          },
        });
      }
    } catch (err) {
      console.warn(err);
      return res.status(404).send({
        error: 'Bad request',
      });
    }

    return res.json(users);
  },

  // "DELETAR USUÁRIO"
  async destroy(req, res) {
    const {
      user_logado,
    } = req.params;
    const authHeader = req.headers.authorization;

    let user = null;

    console.log(authHeader);

    user = await User.findOne({
      where: {
        id: user_logado,
      },
    });
    if (!user) {
      return res.status(400).json({
        error: 'Account not found',
      });
    }

    console.log(req.userID);

    // se o logado esta deletando
    if (!(Number(user_logado) === Number(req.userID))) {
      return res.status(400).send({
        error: 'Only can delete your account',
      });
    }

    // caso esta identificado corretamente
    try {
      user = await User.destroy({
        where: {
          id: user_logado,
        },
      });

      if (user) {
        return res.status(200).send('sucess');
      }
    } catch (err) {
      console.log(err);
    }

    return res.status(404).send({
      error: 'Account not regitered',
    });
  },

  // "ADMIN DELETE ACCOUNT OF USER"
  async delete(req, res) {
    const {
      admin,
      user_id,
    } = req.params;

    let user = null;
    let adm = null;
    // caso esta identificado corretamente
    try {
      user = await User.findOne({
        where: {
          id: user_id,
        },
      });
      if (!user) {
        return res.status(400).json({
          error: 'Account not found',
        });
      }

      adm = await User.findByPk(admin);
      if (!adm) {
        return res.status(400).json({
          error: '[ADMIN] :: Account not found',
        });
      }
      if (adm.canny) {
        user = await User.destroy({
          where: {
            id: user_id,
          },
        });

        return res.status(200).send('sucess');
      }
      return res.status(404).json({
        message: 'You are not ADMIN!',
      });
    } catch (err) {
      console.log(err);
    }

    return res.status(404).send({
      error: 'Account not regitered',
    });
  },

  // "ADMIN DEMOTE A ADMIN_ID"
  async demote(req, res) {
    const {
      admin_id,
      owner,
    } = req.params;

    try {
      if (parseInt(owner) === 1) {
        const edited = await User.update({
          canny: false,
        }, {
          where: {
            id: admin_id,
          },
        });

        return res.json(edited);
      }
    } catch (err) {
      console.log(err.message);
    }

    return res.status(400).json();
  },
};
