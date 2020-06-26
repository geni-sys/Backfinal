module.exports = {
  async index(request, response) {
    const {
      adminID,
      issueID,
    } = request.params;

    return response.json({
      adminID,
      issueID,
    });
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

  async editI(request, response) {
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
