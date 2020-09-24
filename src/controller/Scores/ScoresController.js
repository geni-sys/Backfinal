/* eslint-disable quotes */
/* eslint-disable camelcase */
const Scores = require("../../model/Scores");
const User = require("../../model/User");

module.exports = {
  // get scores from user
  async index(request, response) {
    const { user_id } = request.params;
    const { email } = request.query;

    try {
      if (Number(user_id) === 0) {
        if (!email) {
          return response.status(400).json({ error: "No email provaided" });
        }
        console.log(email);
        const scores = await Scores.findAll({
          include: {
            association: "user",
            where: { email },
          },
        });
        if (!scores) {
          return response.json({ message: "Scores do not exists!" });
        }

        return response.json(scores);
      }

      const user = await User.findByPk(user_id);
      if (!user) {
        return response.json({ message: "User do not exists!" });
      }

      const scores = await Scores.findAll({
        where: { owner: user_id },
        limit: 1,
      });
      if (!scores) {
        return response.json({ message: "Scores do not exists!" });
      }

      return response.json(scores);
    } catch (err) {
      console.log(err.message);
      return response.status(404).json({ error: err.message });
    }

    // return response.status(400).json({ message: "UNCAUGHT" });
  },

  // create scores for user
  async store(request, response) {
    const { user_id } = request.params;

    try {
      const user = await User.findByPk(user_id);
      if (!user) {
        return response.json({ message: "User do not exists!" });
      }

      const scores = await Scores.create({
        owner: user_id,
        issues_createds: 0,
        lists_createds: 0,
        anotations: 0,
      });

      return response.json(scores);
    } catch (err) {
      console.log(err.message);
      return response.status(404).json({ error: err.message });
    }

    // return response.status(400).json({ message: "UNCAUGHT" });
  },

  // update scores for user
  async update(request, response) {
    const { user_id } = request.params;
    const { all } = request.body;

    try {
      const user = await User.findByPk(user_id);
      if (!user) {
        return response.json({ message: "User do not exists!" });
      }

      const scores = await Scores.findAll({
        where: { owner: user_id },
        limit: 1,
      });

      const amount_issues = scores[0].issues_createds;
      const amount_lists = scores[0].lists_createds;
      const amount_anotations = scores[0].anotations;

      if (all) {
        const updated_scores = await Scores.update(
          {
            issues_createds: Number(amount_issues) + 2,
            lists_createds: Number(amount_lists) + 2,
            anotations: Number(amount_anotations) + 2,
          },
          { where: { owner: user_id } }
        );

        return response.json(updated_scores);
      }

      return response.json(scores);
    } catch (err) {
      console.log(err.message);
      return response.status(404).json({ error: err.message });
    }

    // return response.status(400).json({ message: "UNCAUGHT" });
  },

  // update scores for user
  async updateIssue(request, response) {
    const { user_id } = request.params;
    const { issue } = request.body;

    try {
      const user = await User.findByPk(user_id);
      if (!user) {
        return response.json({ message: "User do not exists!" });
      }

      const scores = await Scores.findAll({
        where: { owner: user_id },
        limit: 1,
      });

      const amount_issues = scores[0].issues_createds;

      if (issue) {
        const updated_scores = await Scores.update(
          {
            issues_createds: Number(amount_issues) + 2,
          },
          { where: { owner: user_id } }
        );

        return response.json(updated_scores);
      }

      return response.json(scores);
    } catch (err) {
      console.log(err.message);
      return response.status(404).json({ error: err.message });
    }

    // return response.status(400).json({ message: "UNCAUGHT" });
  },

  // update scores for user
  async updateList(request, response) {
    const { user_id } = request.params;
    const { list } = request.body;

    try {
      const user = await User.findByPk(user_id);
      if (!user) {
        return response.json({ message: "User do not exists!" });
      }

      const scores = await Scores.findAll({
        where: { owner: user_id },
        limit: 1,
      });

      const amount_lists = scores[0].lists_createds;

      if (list) {
        const updated_scores = await Scores.update(
          {
            lists_createds: Number(amount_lists) + 2,
          },
          { where: { owner: user_id } }
        );

        return response.json(updated_scores);
      }

      return response.json(scores);
    } catch (err) {
      console.log(err.message);
      return response.status(404).json({ error: err.message });
    }

    // return response.status(400).json({ message: "UNCAUGHT" });
  },

  // update scores for user
  async updateAnotation(request, response) {
    const { user_id } = request.params;
    const { anotation } = request.body;

    try {
      const user = await User.findByPk(user_id);
      if (!user) {
        return response.json({ message: "User do not exists!" });
      }

      const scores = await Scores.findAll({
        where: { owner: user_id },
        limit: 1,
      });

      const amount_anotations = scores[0].anotations;

      if (anotation) {
        const updated_scores = await Scores.update(
          {
            anotations: Number(amount_anotations) + 2,
          },
          { where: { owner: user_id } }
        );

        return response.json(updated_scores);
      }

      return response.json(scores);
    } catch (err) {
      console.log(err.message);
      return response.status(404).json({ error: err.message });
    }

    // return response.status(400).json({ message: "UNCAUGHT" });
  },
};
