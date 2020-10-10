const Challenge = require('../model/Challenge');
const User = require('../model/User');
const Issue = require('../model/Issue');

module.exports = {
  // "LISTAR DESAFIOS"
  async index(request, response) {
    const challenges = await Challenge.findAll();

    return response.json(challenges);
  },

  // "CRIAR DESAFIOS"
  async store(request, response) {
    const {
      user_id,
      issue_id,
    } = request.params;
    const {
      body,
      tips,
    } = request.body;

    try {
      const user = await User.findByPk(user_id);
      const issue = await Issue.findByPk(issue_id);
      if (!user) {
        return response.status(400).json({
          message: 'User not found',
        });
      }
      if (!issue) {
        return response.status(400).json({
          message: 'Issue do not exists or Deleted!',
        });
      }

      const challenge = await Challenge.create({
        user: user_id,
        body,
        tips,
        issue: issue_id,
      });

      return response.json(challenge);
    } catch (err) {
      console.log(err.message);
      return response.status(400).json({
        message: 'Connection uncaught!',
      });
    }
  },
};
