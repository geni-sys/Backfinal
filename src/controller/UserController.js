const User = require('../model/User')

const {
  conpareteData
} = require('./utils/functions')

module.exports = {
  // "LISTAR USUÁRIOS"
  async index(req, res) {
    let users = null
    try {
      users = await User.findAll({
        attributes: {
          exclude: ['password']
        }
      })
    } catch (err) {
      console.warn(err)
      return res.status(404).send({
        error: "Bad request"
      })
    }

    return res.json(users)
  },

  // "DELETAR USUÁRIO"
  async destroy(req, res) {
    const {
      email,
      account
    } = req.body
    const authHeader = req.headers.authorization

    let user = null

    if (!conpareteData(email, account)) {
      return res.status(404).send({
        error: "Only can delete your account"
      })
    }

    try {
      user = await User.destroy({
        where: {
          email
        }
      })

      if (user) {
        return res.status(200).send("sucess")
      }
    } catch (err) {
      console.log(err)
    }

    return res.status(404).send({
      error: "Account not regitered"
    })
  }
}
