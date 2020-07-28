/* eslint-disable radix */
/* eslint-disable camelcase */
const {
  Op,
} = require('sequelize');

const User = require('../model/User');
const Playlist = require('../model/Playlist');
const PlaylistAndIssue = require('../model/PlaylistAndIssue');
const Issue = require('../model/Issue');

module.exports = {
  // "LISTAR PLAYLIST"
  async index(request, response) {
    const {
      query,
    } = request.query;

    let lists = null;
    try {
      if (!query) {
        lists = await Playlist.findAll({
          include: [{
            association: 'issues',
          }],
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'owner'],
          },
        });
      } else {
        lists = await Playlist.findAll({
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'owner'],
          },
          where: {
            name: {
              [Op.like]: `%${query}%`,
            },
          },
        });
      }
    } catch (err) {
      console.log(err.message);
      return response.status(400).json();
    }

    return response.json(lists);
  },

  // "CREATE PLAYLIST"
  async store(req, res) {
    const {
      user_id,
    } = req.params;
    const {
      name,
    } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({
        message: 'Error user not found',
      });
    }

    const playlist = await Playlist.create({
      owner: user_id,
      name,
    });

    return res.json(playlist);
  },

  // "CREATE LIST-ISSUE RELATION"
  async create(req, res) {
    const {
      issuesx,
    } = req.body;
    const {
      id,
    } = req.params;

    try {
      const issuesy = String(issuesx).split(',');
      const allIssues = issuesy.map(async (x) => {
        const a = parseInt(x.trim());

        if (!await Issue.findByPk(a)) {
          return res.status(400).json({
            message: 'Error Issue not found OR deleted',
          });
        }

        return parseInt(a);
      });

      if (!await Playlist.findByPk(id)) {
        return res.status(400).json({
          message: 'Error Playlist do not exists',
        });
      }

      const list_created = issuesy.map(async (n) => {
        const result = await PlaylistAndIssue.create({
          list: parseInt(id),
          issue: parseInt(n.trim()),
        }).catch((err) => {
          throw new Error(err.message);
        });

        return result;
      });

      return res.json({
        total: list_created.length,
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },

  // "PEGA LISTS DE UM USER"
  async unic(req, res) {
    const {
      user_id,
    } = req.params;

    // verifyAuthencite(user_id, res, req)

    const user = await User.findByPk(user_id, {
      include: ['lists'],
    });

    return res.json(user);
  },

  // "PEGA UMA ÚNICA LIST"
  async unc(request, response) {
    const {
      list_id,
    } = request.params;
    try {
      const list = await PlaylistAndIssue.findAll({
        attributes: ['id'],
        include: [{
          association: 'issues',
          attributes: ['id', 'title', 'body', 'link', 'tags'],
        }, {
          association: 'lists',
          attributes: ['id', 'name'],
          where: {
            id: list_id,
          },
        }],
      });

      if (!list) {
        return response.status(500).json({
          error: 'list do not exists',
        });
      }

      return response.json(list);
    } catch (err) {
      console.log(err.message);
      return response.status(400).json({
        message: 'Error in connection!',
      });
    }
  },

  async stars(request, response) {
    const {
      id,
    } = request.params;
    const {
      verb,
    } = request.body;
    try {
      let list = await Playlist.findByPk(id);

      if (!list) {
        return response.status(500).json({
          error: 'list do not exists',
        });
      }

      if (verb === 1) {
        const more = parseInt(list.stars) + 1;

        list = await Playlist.update({
          stars: more,
        }, {
          where: {
            id,
          },
        });
      } else {
        const less = parseInt(list.stars) - 1;

        if (less !== 0) {
          list = await Playlist.update({
            stars: less,
          }, {
            where: {
              id,
            },
          });
        }
      }

      return response.json(list);
    } catch (err) {
      console.log(err.message);
      return response.status(400).json({
        message: 'Error in connection!',
      });
    }
  },

  async learning(request, response) {
    const {
      id,
    } = request.params;
    const {
      verb,
    } = request.body;
    try {
      let list = await Playlist.findByPk(id);

      if (!list) {
        return response.status(500).json({
          error: 'list do not exists',
        });
      }

      if (verb === 1) {
        const more = parseInt(list.users_learning) + 1;

        list = await Playlist.update({
          users_learning: more,
        }, {
          where: {
            id,
          },
        });
      } else {
        const less = parseInt(list.users_learning) - 1;

        if (less !== 0) {
          list = await Playlist.update({
            users_learning: less,
          }, {
            where: {
              id,
            },
          });
        }
      }

      return response.json(list);
    } catch (err) {
      console.log(err.message);
      return response.status(400).json({
        message: 'Error in connection!',
      });
    }
  },

  async delete(req, res) {
    const {
      list_id,
    } = req.params;

    try {
      const response = await Playlist.destroy({
        where: {
          id: list_id,
        },
      });

      return res.json(response);
    } catch (err) {
      console.log(err.message);

      return res.status(400).json({
        message: 'Do not could delete',
      });
    }
  },

};
