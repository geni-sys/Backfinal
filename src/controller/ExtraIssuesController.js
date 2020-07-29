const Issue = require('../model/Issue');

module.exports = {
  // GET ISSUES: CREATEDS, FEATUREDES,
  async index(request, response) {
    try {
      const issues = await Issue.count();

      return response.json({
        criadas: issues,
        destaques: 0,
      });
    } catch (err) {
      console.log(err.message);
    }

    return response.status(400).json();
  },
};
