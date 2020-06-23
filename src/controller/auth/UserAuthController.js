const User = require('../../model/User')
const bcrypt = require('bcrypt')

const {
  generateToken
} = require('../utils/functions')


module.exports = {
  // "LOGAR USUÁRIO"
  async login(req, res) {
    const {
      email,
      password
    } = req.body
    const {
      isAdm
    } = req.params

    let user = null
    try {
      // USANDO O NODEJS
      // select *  from  users where email = "email";

      user = await User.findOne({
        where: {
          email,
        },
      })

      if (!user) {
        return res.status(400).send({
          error: "User not found"
        })
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).send({
          error: "Invalid password"
        })
      }

      if (isAdm === 'ok' && user.canny) {
        console.log(`ADM: ${user.name} logando`)
        console.log(`Data: ${String(new Date().getDate())}`)
      }

      user.password = undefined

    } catch (err) {
      console.log(err.message)
      return res.status(404).send({
        error: "Bad request"
      })
    }

    return res.json({
      user,
      token: generateToken({
        id: user.id
      })
    })
  },

  // "CRIAR USUÁRIO" || "/:adm/register"
  async store(req, res) {
    const {
      adm
    } = req.params
    const {
      name,
      email,
      password,
      canny
    } = req.body

    let user = null;

    try {
      if (await User.findOne({
          where: {
            email
          }
        })) {
        return res.status(404).send({
          error: "User already exists"
        })
      }

      // Se é adm
      if (adm === 1) {
        user = await User.create({
          name,
          email,
          password,
          canny
        })
      } else {
        user = await User.create({
          name,
          email,
          password,
          canny
        })
      }

      user.password = undefined
    } catch (err) {
      console.warn(err.message)
      return res.status(400).send({
        error: "Registration failed"
      })
    }

    return res.json({
      user,
      token: generateToken({
        id: user.id
      })
    })
  },

}
