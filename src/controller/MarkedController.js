/* eslint-disable camelcase */
const ListMarked = require('../model/ListMarked');

module.exports = {
  async index(request, response) {
    const {
      user_id,
    } = request.params;

    try {
      const marked = await ListMarked.findAll({
        include: [{
          association: 'list',
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

  async store(request, response) {
    const {
      user_id,
      list_id,
    } = request.params;

    try {
      const mark = await ListMarked.create({
        user_id,
        list_id,
      });

      return response.json(mark);
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json({
      message: 'Cannot mark this list',
    });
  },
};
