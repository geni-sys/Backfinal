/* eslint-disable camelcase */
const
  Sequelize = require('../database');
const IssuesMarked = require('../model/IssuesMarked');
const UserMarked = require('../model/UserMarked');

module.exports = {
  // GET LIST OF ISSUEs MARKED
  async index(request, response) {
    const {
      user_id,
    } = request.params;

    try {
      const marked = await IssuesMarked.findAll({
        include: [{
          association: 'issue',
        }],
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'list_id'],
        },
        where: {
          user_id,
        },
      });

      return response.json(marked);
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json({
      message: 'Cannot mark this list',
    });
  },

  // ADD ISSUE IN MARKED LISTS
  async store(request, response) {
    const {
      user_id,
      issue_id,
    } = request.params;

    try {
      const mark = await IssuesMarked.create({
        user_id,
        issue_id,
      });

      return response.json(mark);
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json({
      message: 'Cannot mark this list',
    });
  },

  // GET LIST OF USERS MARKED
  async initial(request, response) {
    const {
      owner,
    } = request.params;

    try {
      const marked = await UserMarked.findAll({
        include: [{
          association: 'marked',
        }],
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        where: {
          owner,
        },
      });

      return response.json(marked);
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json({
      message: 'Cannot mark this list',
    });
  },

  // ADD USER IN MARKED LIST
  async create(request, response) {
    const {
      owner,
      marked_id,
    } = request.params;

    try {
      const mark = await Sequelize.query(`INSERT INTO user_marked () VALUES (DEFAULT, '${owner}', '${marked_id}', '', '')`);

      return response.json(mark);
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json({
      message: 'Cannot mark this user',
    });
  },

  // -------------------------------
  async unicIssue(request, response) {
    const {
      user_id,
    } = request.params;
    const {
      element,
    } = request.query;

    try {
      const marked = await IssuesMarked.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        where: {
          issue_id: element,
          user_id,
        },
      });

      return response.json(marked);
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json({
      message: 'Cannot mark this list',
    });
  },
};
