/* eslint-disable quotes */
/* eslint-disable no-console */
const bcrypt = require("bcrypt");
const User = require("../../model/User");

const { generateToken } = require("../utils/functions");

module.exports = {
  // "LOGAR ADMIN"
  async login(req, res) {
    const { email, password } = req.body;
    const { isAdm } = req.params;

    let user = null;
    try {
      // USANDO O NODEJS
      // select *  from  users where email = "email";

      user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user || user.excluded) {
        return res.status(400).send({
          error: "User not found",
        });
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).send({
          error: "Invalid password",
        });
      }

      if (isAdm === "ok" && user.canny) {
        console.log(`ADM: ${user.name} logando`);
        console.log(`Dia: ${String(new Date().getDate())}`);
        console.log(`MêS: ${String(new Date().getMonth())}`);
        console.log(`Ano: ${String(new Date().getFullYear())}`);

        return res.json({
          user,
          token: generateToken({
            id: user.id,
          }),
        });
      }

      user.password = undefined;
    } catch (err) {
      console.log(err.message);
      return res.status(404).send({
        error: "Bad request",
      });
    }

    return res.status(403).json({
      error: "You arent an ADMIN",
    });
  },

  // "CRIAR USUÁRIO" || "/admin/:adm/register"
  async store(req, res) {
    const { adm } = req.params;
    const {
      name, email, password, canny,
    } = req.body;
    let { github } = req.body;
    const completed = false;

    let user = null;

    try {
      if (
        await User.findOne({
          where: {
            email,
          },
        })
      ) {
        return res.status(404).send({
          error: "User already exists",
        });
      }

      // Se é adm
      if (!github) {
        github = "https://github.com/geni-sys";
      }
      if (parseInt(adm) === 1) {
        user = await User.create({
          name,
          email,
          password,
          github,
          canny,
          completed,
        });
      } else {
        user = await User.create({
          name,
          email,
          password,
          github,
          canny,
          completed,
        });
      }

      user.password = undefined;
    } catch (err) {
      console.warn(err.message);
      return res.status(400).send({
        error: "Registration failed",
      });
    }

    return res.json({
      user,
      token: generateToken({
        id: user.id,
      }),
    });
  },

  // "LOGAR USUÁRIO"
  async enter(req, res) {
    const { email, password } = req.body;

    let user = null;
    try {
      // USANDO O NODEJS
      // select *  from  users where email = "email";

      user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user || user.excluded) {
        return res.status(400).send({
          error: "User not found",
        });
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).send({
          error: "Invalid password",
        });
      }

      user.password = undefined;

      return res.json({
        user,
        token: generateToken({
          id: user.id,
        }),
      });
    } catch (err) {
      console.log(err.message);
      return res.status(404).send({
        error: "Bad request",
      });
    }
  },
};
