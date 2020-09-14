/* eslint-disable camelcase */
/* eslint-disable quotes */
const { Op } = require("sequelize");

const Issue = require("../model/Issue");
const User = require("../model/User");
const Playlist = require("../model/Playlist");
const Feedbacks = require("../model/Feedbacks");

module.exports = {
  // GET ISSUES: CREATEDS, FEATUREDES,
  async index(request, response) {
    try {
      const issues = await Issue.count();
      const issues_feat = await Issue.count({
        where: { featured: true },
      });

      return response.json({
        criadas: issues,
        destaques: issues_feat,
      });
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json();
  },
  async setIssueAsFeatured(request, response) {
    const { issue_id } = request.params;
    try {
      const issue = await Issue.update(
        {
          featured: true,
        },
        {
          where: { id: issue_id },
        }
      );

      return response.json({
        updated: issue[1],
        modifications: issue[0],
      });
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json();
  },

  // GET USER: CREATEDS, FEATUREDES,
  async getUserFeatures(request, response) {
    try {
      const users = await User.count({
        where: { destaque: true },
      });

      return response.json({
        excluded: 0,
        destaques: users,
      });
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json();
  },
  async setUserAsFeatured(request, response) {
    const { user_id } = request.params;
    try {
      const user = await User.update(
        {
          destaque: true,
        },
        {
          where: { id: user_id },
        }
      );

      return response.json({
        updated: user[1],
        modifications: user[0],
      });
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json();
  },

  // GET lists: CREATEDS, FEATUREDES,
  async getListFeatures(request, response) {
    try {
      const playlist = await Playlist.count();
      const playlist_star = await Playlist.count({
        where: { destaque: true },
      });

      return response.json({
        createds: playlist,
        destaques: playlist_star,
        excludeds: 0,
      });
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json();
  },
  async setListAsFeatured(request, response) {
    const { list_id } = request.params;
    try {
      const user = await Playlist.update(
        {
          destaque: true,
        },
        {
          where: { id: list_id },
        }
      );

      return response.json({
        updated: user[1],
        modifications: user[0],
      });
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json();
  },

  // GET feedback: CREATEDS, FEATUREDES,
  async getFeedbackFeatures(request, response) {
    try {
      const feedbacks_bsc = await Feedbacks.count({
        where: { stars: { [Op.between]: [0, 4] } },
      });

      const feedbacks_nrm = await Feedbacks.count({
        where: { stars: { [Op.between]: [5, 8] } },
      });

      const feedbacks_avd = await Feedbacks.count({
        where: { stars: { [Op.between]: [9, 10] } },
      });

      return response.json({
        basic: feedbacks_bsc,
        normal: feedbacks_nrm,
        advanced: feedbacks_avd,
      });
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json();
  },
};
