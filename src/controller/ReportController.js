const AdminChangeIssue = require('../model/AdminChangeIssue');

module.exports = {
  async index(request, response) {
    const {
      adminID,
    } = request.params;

    try {
      const issueEdit = await AdminChangeIssue.findAll({
        attributes: ['id', 'created_at', 'updated_at'],
        include: [{
          association: 'changed',
          attributes: ['id', 'title'],
        }],
        where: {
          admin_id: adminID
        },
      });

      return response.json(issueEdit);
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async store(request, response) {
    const {
      adminID,
      issueID,
    } = request.params;

    return response.json({
      adminID,
      issueID,
    });
  },

  // ADMIN EDIT A ISSUE
  async editI(request, response) {
    const {
      adminID,
      issueID,
    } = request.params;

    try {
      const issueEdit = await AdminChangeIssue.create({
        admin_id: adminID,
        issue_editada: issueID,
        issue_deletada: issueID,
      });

      return response.json(issueEdit);
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async indexy(request, response) {
    const {
      adminID,
      issueID,
    } = request.params;

    return response.json({
      adminID,
      issueID,
    });
  },
};
