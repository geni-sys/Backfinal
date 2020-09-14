/* eslint-disable quotes */
/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable camelcase */
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const User = require("../model/User");
const hooks = require("../database/hooks.js");
const UserMarked = require("../model/UserMarked");

const { generateToken } = require("./utils/functions");

module.exports = {
  // "LISTAR USUÁRIOS"

  async index(req, res) {
    const { query } = req.query;

    let users = [];
    try {
      if (!query) {
        users = await User.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
      } else {
        users = await User.findAll({
          attributes: {
            exclude: ["password", "canny", "createdAt", "updatedAt"],
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
        error: "Bad request",
      });
    }

    return res.json(users);
  },

  async getOneUserData(req, res) {
    const { user_id } = req.params;
    let { eu } = req.query;

    let users = null;
    try {
      users = await User.findAll({
        attributes: {
          exclude: ["password", "canny", "createdAt", "updatedAt"],
        },
        include: [
          {
            association: "questions",
            attributes: {
              exclude: ["user_question", "createdAt"],
            },
          },
        ],
        where: {
          email: user_id,
        },
      });

      const { id, name, email, github, completed, questions } = users[0];

      if (!eu) {
        eu = "";
      }

      const marked = await UserMarked.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        where: {
          user_mark: id,
          owner: eu,
        },
      });

      let isMarked = false;
      if (marked.length !== 0) {
        isMarked = true;
      }

      return res.json({
        id,
        name,
        email,
        github,
        completed,
        questions,
        isFriend: isMarked,
      });
    } catch (err) {
      console.warn(err.message);
      return res.status(404).send({
        error: err.message,
      });
    }
  },

  // "DELETAR USUÁRIO"
  async destroy(req, res) {
    const { user_logado } = req.params;
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
        error: "Account not found",
      });
    }

    console.log(req.userID);

    // se o logado esta deletando
    if (!(Number(user_logado) === Number(req.userID))) {
      return res.status(400).send({
        error: "Only can delete your account",
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
        return res.status(200).send("sucess");
      }
    } catch (err) {
      console.log(err);
    }

    return res.status(404).send({
      error: "Account not regitered",
    });
  },

  // "ADMIN DELETE ACCOUNT OF USER"
  async delete(req, res) {
    const { admin, user_id } = req.params;

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
          error: "Account not found",
        });
      }

      adm = await User.findByPk(admin);
      if (!adm) {
        return res.status(400).json({
          error: "[ADMIN] :: Account not found",
        });
      }
      if (adm.canny) {
        user = await User.destroy({
          where: {
            id: user_id,
          },
        });

        return res.status(200).send("sucess");
      }
      return res.status(404).json({
        message: "You are not ADMIN!",
      });
    } catch (err) {
      console.log(err);
    }

    return res.status(404).send({
      error: "Account not regitered",
    });
  },

  // "ADMIN DEMOTE A ADMIN_ID"
  async demote(req, res) {
    const { admin_id, owner } = req.params;

    try {
      if (parseInt(owner) === 1) {
        const edited = await User.update(
          {
            canny: false,
          },
          {
            where: {
              id: admin_id,
            },
          }
        );

        return res.json(edited);
      }
    } catch (err) {
      console.log(err.message);
    }

    return res.status(401).json({ error: "Apenas CEO pode rebaixar alguém" });
  },

  // "UPDATE NAME, BIO AND GITHUB"
  async update(req, res) {
    const { name, bio, github } = req.body;
    const { user_id } = req.params;

    try {
      const updated = await User.update(
        {
          name,
          github,
        },
        {
          where: {
            id: user_id,
          },
          returning: true,
        }
      );

      console.log(bio);

      return res.json({
        oparation: !!updated[1],
      });
    } catch (err) {
      console.log(err.message);
      return res.status(401).json({
        error: err.message,
      });
    }

    // return res.status(400).json({
    //   error: 'User Could not be updated'
    // });
  },

  async password(req, res) {
    const { oldPassword, newPassword } = req.body;
    const { user_id } = req.params;

    try {
      const user = await User.findByPk(user_id);
      if (!user) {
        return res.status(400).json({
          error: "User dont exists",
        });
      }

      if (!(await bcrypt.compare(oldPassword, user.password))) {
        return res.status(400).send({
          error: "Invalid password",
        });
      }

      // console.log(word);
      return hooks.useCriptoToHash(newPassword).then(async (created) => {
        const updated = await User.update(
          {
            password: String(created),
          },
          {
            where: {
              id: user_id,
            },
            returning: true,
          }
        );

        return res.json({
          oparation: !!updated[1],
        });
      });

      // console.log(newPassword);
    } catch (err) {
      console.log(err.message);
      return res.status(401).json({
        error: err.message,
      });
    }

    // return res.status(400).json({
    //   error: 'User Could not be updated'
    // });
  },

  async token(req, res) {
    const { user_id } = req.params;

    try {
      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(400).json({
          error: "User not found",
        });
      }

      return res.json({
        token: generateToken({
          id: user.id,
        }),
      });
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        error: err.message,
      });
    }
  },
};
