const User = require('../model/User')
const Questions = require('../model/Questions')

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
    const user_logado = req.params.user_logado
    const authHeader = req.headers.authorization

    let user = null

    console.log(authHeader)

    user = await User.findOne({
      where: {
        id: user_logado
      }
    })
    if (!user) {
      return res.status(400).json({
        error: "Account not found"
      })
    }

    // se o logado esta deletando
    if (!(Number(user_logado) === Number(req.userID))) {
      return res.status(400).send({
        error: "Only can delete your account"
      })
    }

    // caso esta identificado corretamente
    try {
      user = await User.destroy({
        where: {
          id: user_logado,
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
  },
}
