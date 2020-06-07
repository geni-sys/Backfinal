const User = require('../model/User')
const Playlist = require('../model/Playlist')
const Issue = require('../model/Issue')

module.exports = {
  // "LISTAR PLAYLIST"
  async index(req, res) {
    const {
      list_id
    } = req.params

    const playlist = await Playlist.findAll({
      include: {
        association: 'list',
        association: 'issues'
      },
    })

    return res.json(playlist)
  },

  // "CREATE PLAYLIST"
  async store(req, res) {
    const {
      user_id
    } = req.params
    const {
      name,
      issue_id
    } = req.body

    if (!await User.findByPk(user_id)) {
      return res.status(400).json({
        message: 'Error user not found'
      })
    }

    if (!await Issue.findByPk(issue_id)) {
      return res.status(400).json({
        message: 'Error Issue not found OR deleted'
      })
    }

    const playlist = await Playlist.create({
      owner: user_id,
      name,
      issues: issue_id,
    })

    return res.json(playlist)
  },

}
