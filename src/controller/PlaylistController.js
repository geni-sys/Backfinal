const User = require('../model/User')
const Playlist = require('../model/Playlist')

module.exports = {
  // "LISTAR PLAYLIST"
  async index(req, res) {

    const playlist = await Playlist.findAll()

    return res.json(playlist)
  },

  // "CREATE PLAYLIST"
  async store(req, res) {
    const {
      user_id
    } = req.params
    const {} = req.body

    if (!await User.findByPk(user_id)) {
      return res.status(400).json({
        message: 'Error user not found'
      })
    }

    const playlist = await Playlist.create({})

    return res.json(playlist)
  },

}
