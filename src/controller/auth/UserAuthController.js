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

    let user = null
    try {
      user = await User.findOne({
        where: {
          email
        },
      })

      if (!user) {
        return res.status(400).send({
          error: "User not found"
        })
      }

      console.log(password)
      console.log(user.password)

      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).send({
          error: "Invalid password"
        })
      }

      user.password = undefined

    } catch (err) {
      console.log(err)
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

  // "CRIAR USUÁRIO"
  async store(req, res) {
    const {
      name,
      email,
      password
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

      user = await User.create({
        name,
        email,
        password
      })

      user.password = undefined
    } catch (err) {
      console.warn(err)
      return res.tatus(400).send({
        error: "Registration failed"
      })
    }

    return res.json({
      user,
      token: generateToken({
        id: user.id
      })
    })
  }
}
