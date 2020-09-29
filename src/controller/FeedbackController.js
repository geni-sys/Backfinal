/* eslint-disable quotes */
/* eslint-disable camelcase */
/* eslint-disable radix */
const Feedbacks = require("../model/Feedbacks");
const User = require("../model/User");

module.exports = {
  // GET ALL FEEDBACKS
  async index(request, response) {
    try {
      const feedbacks = await Feedbacks.findAll({
        attributes: ["id", "user_id", "title", "message", "stars"],
        include: {
          association: "user",
          attributes: ["name", "email", "github", "id", "canny"],
        },
        limit: 10,
      });

      return response.json(feedbacks);
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json({
      message: "Error, couldn`t get messages",
    });
  },
  // CREATE A NEW FEEDBACK
  async store(request, response) {
    const { user_id } = request.params;
    const { title, message, stars } = request.body;

    try {
      const user = await User.findByPk(user_id);
      if (!user) {
        return response.status(400).json({
          message: "Only users can create messages",
        });
      }

      const feedback = await Feedbacks.create({
        user_id,
        title,
        message,
        stars: parseInt(stars),
      });

      return response.json(feedback);
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json({
      message: "Error, couldn`t crate a feedback!",
    });
  },

  // GET A UNIC FEEDBACKasync
  async unic(request, response) {
    const { feed } = request.params;

    try {
      const feeds = await Feedbacks.findByPk(feed, {
        attributes: ["id", "user_id", "title", "message", "stars"],
        include: {
          association: "user",
          attributes: ["name", "email", "github", "id", "canny"],
        },
      });

      return response.json(feeds);
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json({
      message: "Error, couldn`t get message",
    });
  },
};
