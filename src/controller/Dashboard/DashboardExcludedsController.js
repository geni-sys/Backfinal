/* eslint-disable camelcase */
/* eslint-disable no-console */
const DashboardExcludeds = require('../../model/DashboardExcludeds');

module.exports = {
  // "LISTAR DESAFIOS"
  async index(request, response) {
    const registry = await DashboardExcludeds.findAll();

    return response.json(registry);
  },

  // "CRIAR DESAFIOS"
  async store(request, response) {
    const {
      user_id,
    } = request.params;

    try {
      if (user_id) {
        console.log(user_id);
      }

      const registry = await DashboardExcludeds.create({
        playlist_excludeds: 0,
        user_excludeds: 0,
        issue_excludeds: 0,
      });

      return response.json(registry);
    } catch (err) {
      console.log(err.message);
      return response.status(400).json({
        message: 'Connection uncaught!',
      });
    }
  },

  // "UPDATE DESAFIOS"
  async update(request, response) {
    const {
      user_id,
    } = request.params;
    const {
      issue, user, list,
    } = request.query;

    try {
      if (user_id) {
        console.log(user_id);
      }

      const registry_in = await DashboardExcludeds.findByPk(1);

      const { playlist_excludeds, user_excludeds, issue_excludeds } = registry_in;

      if (issue) {
        const registry = await DashboardExcludeds.update({
          issue_excludeds: 1 + Number(issue_excludeds),
        }, {
          where: {
            id: 1,
          },
        });

        return response.json(registry);
      }

      if (list) {
        const registry = await DashboardExcludeds.update({
          playlist_excludeds: 1 + Number(playlist_excludeds),
        }, {
          where: {
            id: 1,
          },
        });

        return response.json(registry);
      }

      if (user) {
        const registry = await DashboardExcludeds.update({
          user_excludeds: 1 + Number(user_excludeds),
        }, {
          where: {
            id: 1,
          },
        });

        return response.json(registry);
      }

      return response.json(registry_in);
    } catch (err) {
      console.log(err.message);
      return response.status(400).json({
        message: 'Connection uncaught!',
      });
    }
  },
};
