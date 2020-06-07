const User = require('../model/User')
const Playlist = require('../model/Playlist')
const PlaylistAndIssue = require('../model/PlaylistAndIssue')
const Issue = require('../model/Issue')

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
    const {
      name,
    } = req.body

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(400).json({
        message: 'Error user not found'
      })
    }

    const playlist = await Playlist.create({
      owner: user_id,
      name,
    })

    return res.json(playlist)
  },

  // "CREATE LIST-ISSUE RELATION"
  async create(req, res) {
    const {
      list,
      issue
    } = req.body

    if (!await Issue.findByPk(issue)) {
      return res.status(400).json({
        message: 'Error Issue not found OR deleted'
      })
    }
    if (!await Playlist.findByPk(list)) {
      return res.status(400).json({
        message: 'Error Playlist do not exists'
      })
    }

    const list_created = await PlaylistAndIssue.create({
      list,
      issue,
    })

    return res.json(list_created)
  },

  // "PEGA LISTS DE UM USER"
  async unic(req, res) {
    const {
      user_id
    } = req.params

    const user = await User.findByPk(user_id, {
      include: ['lists']
    })

    return res.json(user)
  }

}
