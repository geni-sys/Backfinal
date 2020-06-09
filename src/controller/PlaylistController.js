const User = require('../model/User')
const Playlist = require('../model/Playlist')
const PlaylistAndIssue = require('../model/PlaylistAndIssue')
const Issue = require('../model/Issue')

const {
  verifyAuthencite
} = require('./utils/functions')

module.exports = {
  // "LISTAR PLAYLIST"
  async index(request, response) {
    let lists = null
    try {
      lists = await Playlist.findAll({
        include: [{
          association: 'issues'
        }]
      });
    } catch (err) {
      console.log(err.message)

      return response.status(400).json()
    }

    return response.json(lists)
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

    // verifyAuthencite(user_id, res, req)

    const user = await User.findByPk(user_id, {
      include: ['lists']
    })

    return res.json(user)
  },

}
